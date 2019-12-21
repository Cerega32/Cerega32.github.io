const setup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupClose = document.querySelector('.setup-close');
const userNameInput = document.querySelector('.setup-user-name');
const setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
const inputCoatColor = document.querySelector('input[name="coat-color"]');
const setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const inputEyesColor = document.querySelector('input[name="eyes-color"]');
const setupFireball = document.querySelector('.setup-fireball-wrap');
const inputFireballColor = document.querySelector('input[name="fireball-color"]');
const dialogHandler = setup.querySelector('.upload');

const random = (values) => {
  let rand = Math.floor(Math.random() * (values.length));
  return values[rand];
}

const coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
]

const eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
]

const fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
]


const escPressPopup = (evt) => {
  if (evt.keyCode === 27) {
    closePopup();
  }
}

const enterPressPopup = (evt) => {
  if (evt.keyCode === 13) {
    openPopup();
  }
}

const focusInputName = () => {
  document.removeEventListener('keydown', escPressPopup);
}

const openPopup = () => {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', escPressPopup);
  userNameInput.addEventListener('focus', focusInputName);
  userNameInput.addEventListener('blur', () => {
    document.addEventListener('keydown', escPressPopup);
  }); 
}

const closePopup = () => {
  setup.classList.add('hidden');
  setup.style = '';
}






let wizards = [];
const getRank = (wizard) => {
  let rank = 0;
  
  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }  
  return rank;
};

const updateWizards = () => {
  window.render(wizards.slice().sort((left, right) => {
    let rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
    }
    return rankDiff;
  }));
}

let coatColor;
const changeColorCoat = () => {
  const color = random(coatColors);
  setupWizardCoat.style.fill = color;
  inputCoatColor.value = color;
  coatColor = color;

  window.debounce(function () {
    updateWizards();
  }); 
}

let eyesColor;
const changeColorEyes = () => {
  const color = random(eyesColors);
  setupWizardEyes.style.fill = color;
  inputEyesColor.value = color;
  eyesColor = color;
  window.debounce(function () {
    updateWizards();
  }); 
}

const changeColorFireball = () => {
  const color = random(fireballColors);
  setupFireball.style.background = color;
  inputFireballColor.value = color;
}


const successHandler = (data) => {
  wizards = data;
  updateWizards();
}

const errorHandler = (errorMessage) => {
  const node = document.createElement('div');
  node.style = 'z-index: 100; margin 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
}

window.backend.load(successHandler, errorHandler);




setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', enterPressPopup);

setupClose.addEventListener('click', closePopup);
setupClose.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
    closePopup();
  }
});
setupWizardCoat.addEventListener('click', changeColorCoat);
setupWizardEyes.addEventListener('click', changeColorEyes);
setupFireball.addEventListener('click', changeColorFireball);


dialogHandler.addEventListener('mousedown', (evt) => {
  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  }
  let dragged = false;
  
  const onMouseMove = (moveEvt) => {
    moveEvt.preventDefault();
    
    dragged = true;
    const shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    }
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    }
    
    setup.style.top = `${(setup.offsetTop - shift.y)}px`;
    setup.style.left = `${(setup.offsetLeft - shift.x)}px`;
  }
  
  const onMouseUp = (upEvt) => {    
    upEvt.preventDefault();
    
    
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    
    if (dragged) {
      const onClickPreventDefault = (clickEvt) => {
        clickEvt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault)
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  }
  
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
})



const setupWizardForm = setup.querySelector('.setup-wizard-form');

const errorPost = (errorMessage) => {
  const node = document.createElement('div');
  node.style = 'z-index: 100; margin 0 auto; text-align: center; background-color: green;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.top = 40 + 'px';
  node.style.right = 0;
  node.style.fontSize = '30px';
  
  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
}


setupWizardForm.addEventListener('submit', (evt) => {
  window.backend.save(new FormData(setupWizardForm), () => {
    closePopup();
  }, errorPost);
  evt.preventDefault();
});


