'use strict'

{
  const fileTypes = ['gif', 'jpg', 'jpeg', 'png'];

  const fileChooser = document.querySelector('.notice__photo input[type=file]');
  const filesChooser = document.querySelector('.form__photo-container input[type=file]');
  const preview = document.querySelector('.ad-form-header__preview');
  const previewSecond = document.querySelector('.ad-form__photo');
  
  
  
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = fileTypes.some((it) => {
      return fileName.endsWith(it);
    })
    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
      })

      reader.readAsDataURL(file);
    }
  })
  filesChooser.addEventListener('change', () => {
    const file = filesChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = fileTypes.some((it) => {
      return fileName.endsWith(it);
    })
    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewSecond.src = reader.result;
      })

      reader.readAsDataURL(file);
    }
  })


}