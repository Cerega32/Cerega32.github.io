'use strict'

{
  const fileTypes = ['gif', 'jpg', 'jpeg', 'png'];

  const fileChooser = document.querySelector('.upload input[type=file]');
  const preview = document.querySelector('.setup-user-pic');
  const previewSecond = document.querySelector('.setup-open-icon');
  
  
  
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
        previewSecond.src = reader.result;
      })

      reader.readAsDataURL(file);
    }
  })
}