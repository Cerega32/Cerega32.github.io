// const firstNames = [
//   'Иван',
//   'Хуан Себастьян',
//   'Мария',
//   'Кристоф',
//   'Виктор',
//   'Юлия',
//   'Люпита',
//   'Вашингтон',
// ]

// const secondNames = [
//   'да Марья',
//   'Верон',
//   'Мирабелла',
//   'Вальц',
//   'Онопко',
//   'Топольницкая',
//   'Нионго',
//   'Ирвинг',
// ]

// const coatColor = [
//   'rgb(101, 137, 164)',
//   'rgb(241, 43, 107)',
//   'rgb(146, 100, 161)',
//   'rgb(56, 159, 117)',
//   'rgb(215, 210, 55)',
//   'rgb(0, 0, 0)'
// ]

// const eyesColor = [
//   'black',
//   'red',
//   'blue',
//   'yellow',
//   'green'
// ]

// const fireballColor = [
//   '#ee4830',
//   '#30a8ee',
//   '#5ce6c0',
//   '#e848d5',
//   '#e6e848'
// ]

// const random = (values) => {
//   let rand = Math.floor(Math.random() * (values.length));
//   return values[rand];
// }


// const makeWizards = () => {
//   let wizard = [];
//   for(let i = 0; i < 4; i++) {
//     wizard = [
//       {
//         name: `${random(firstNames)} ${random(secondNames)}`,
//         coatColor: random(coatColor),
//         eyesColor: random(eyesColor)
//       },
//       ...wizard
//     ]
//   }
//   return wizard;
// }

const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

  return wizardElement;
}

window.render = (data) => {
  var takeNumber = data.length > 4 ? 4 : data.length;
  similarListElement.innerHTML = '';
  for (var i = 0; i < takeNumber; i++) {
    similarListElement.appendChild(renderWizard(data[i]));
  }
  setup.querySelector('.setup-similar').classList.remove('hidden'); 
}
