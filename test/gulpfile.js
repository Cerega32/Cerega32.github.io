var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    pug = require('gulp-pug'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    ftp = require('vinyl-ftp'),
    notify = require("gulp-notify"),
    plumber = require('gulp-plumber'),
    rsync = require('gulp-rsync');

// Пользовательские скрипты проекта

gulp.task('main-js', function() {
    return gulp.src([
            'app/js/main.js',
        ])
        .pipe(plumber())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/js'));
});

gulp.task('js', ['main-js'], function() {
    return gulp.src([
            '../node_modules/jquery/dist/jquery.min.js',
            '../node_modules/bootstrap/dist/js/bootstrap.min.js',
            'app/js/main.min.js', // Всегда в конце
        ])
        .pipe(concat('scripts.min.js'))
        // .pipe(uglify()) // Минимизировать весь js (на выбор)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        tunnel: true,
        tunnel: "cerega32", //Demonstration page: http://projectmane.localtunnel.me
    });
});

gulp.task('pug', function() {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({ pretty: true }).on("error", notify.onError()))
        .pipe(gulp.dest('app'));
});

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS()) // Опционально, закомментировать при отладке
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', ['pug', 'sass', 'js', 'browser-sync'], function() {
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch(['libs/**/*.js', 'app/js/main.js'], ['js']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/**/*')
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

    var buildFiles = gulp.src([
        'app/*.html',
        'app/.htaccess',
    ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        'app/css/main.min.css',
    ]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
        'app/js/scripts.min.js',
    ]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
        'app/fonts/**/*',
    ]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('deploy', function() {

    var conn = ftp.create({
        host: 'hostname.com',
        user: 'username',
        password: 'userpassword',
        parallel: 10,
        log: gutil.log
    });

    var globs = [
        'dist/**',
        'dist/.htaccess',
    ];
    return gulp.src(globs, { buffer: false })
        .pipe(conn.dest('/path/to/folder/on/server'));

});

gulp.task('rsync', function() {
    return gulp.src('dist/**')
        .pipe(rsync({
            root: 'dist/',
            hostname: 'username@yousite.com',
            destination: 'yousite/public_html/',
            archive: true,
            silent: false,
            compress: true
        }));
});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function() { return cache.clearAll(); });

gulp.task('default', ['watch']);