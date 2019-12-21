{ 
  const cloudWidth = 420;
  const cloudHeight = 270;

  var renderCloud = (ctx, x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cloudWidth, cloudHeight);
  }

  window.renderStatistics = function(ctx, names, times) {
    renderCloud(ctx, 150, 10, 'rgba(0,0,0,.7)');
    renderCloud(ctx, 140, 0, 'rgba(255,255,255, 1)');
    // context.font = "22px Verdana";
    // ctx.strokeStyle = '#000';
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 150, 20)
    ctx.fillText('Список результатов:', 150, 40)


    const findMax = (values) => {
      let max = values[0];
      for(let i = 1; i < values.length; i++) {
        if(max < values[i]) {
          max = values[i];
        }
      }
      return max;
    }
    
    const maxValue = findMax(times);
    for(let i = 0; i < times.length; i++) {
      const randomOpacity = Math.random().toFixed(2)
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red'
      } else {
        const colorBlue = `rgba(0, 0, 255, ${randomOpacity})`;
        ctx.fillStyle = colorBlue;    
      }
      const heightBar = Math.floor(times[i] * 150 / maxValue);
      const getX = 180 + i * 90;
      const getY = 90 + 150 - heightBar;
      ctx.fillRect(getX, getY, 40, heightBar);
      ctx.fillText(names[i], getX, 260);
      ctx.fillText(Math.floor(times[i]), getX, getY - 10);
    }
  }
}