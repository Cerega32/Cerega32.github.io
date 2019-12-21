'use strict';
{

}

const formElements = document.querySelectorAll('.form__element');
const formHeader = document.querySelector('.notice__header');
const success = document.querySelector('.success');
const fields = window.map.noticeForm.querySelectorAll('fieldset');
const addressInput = window.map.noticeForm.querySelector('input[name="address"]');
const typeSelect = window.map.noticeForm.querySelector('select[name="type"]');
const priceInput = window.map.noticeForm.querySelector('input[name="price"]');
const timeInSelect = window.map.noticeForm.querySelector('select[name="timein"]');
const timeOutSelect = window.map.noticeForm.querySelector('select[name="timeout"]');
const roomsSelect = window.map.noticeForm.querySelector('select[name="rooms"]');
const capacitySelect = window.map.noticeForm.querySelector('select[name="capacity"]');
const submitBtn = window.map.noticeForm.querySelector('.form__submit');
const resetBtn = window.map.noticeForm.querySelector('.form__reset');


const roomsValues = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};

const changePriceFromType = () => {
  switch(typeSelect.value) {
    case 'bungalo': 
      priceInput.min = 0;
      priceInput.placeholder = 0;
      break;
    case 'flat': 
      priceInput.min = 1000;
      priceInput.placeholder = 1000;
      break;
    case 'house': 
      priceInput.min = 5000;
      priceInput.placeholder = 5000;
      break;
    case 'palace': 
      priceInput.min = 10000;
      priceInput.placeholder = 10000;
      break;
  }
}

typeSelect.addEventListener('change', changePriceFromType);
changePriceFromType();

timeInSelect.addEventListener('change', () => {
  timeOutSelect.value = timeInSelect.value;
});

timeOutSelect.addEventListener('change', () => {
  timeInSelect.value = timeOutSelect.value;
});


const checkPlaceValidity = () => {
  const roomGuests = roomsValues[roomsSelect.value];
  if (roomGuests.indexOf(+capacitySelect.value) === -1) {
    capacitySelect.setCustomValidity('Количество гостей не влезут в выбранную комнату');
  } else {
    capacitySelect.setCustomValidity('');
  }
};

roomsSelect.addEventListener('change', (evt) => {
  evt.target.setCustomValidity('');
});

capacitySelect.addEventListener('change', (evt) => {
  evt.target.setCustomValidity('');
});

submitBtn.addEventListener('click', () => {
  checkPlaceValidity();
});


// const showSuccess = () => {
//   success.classList.remove('hidden');
//   document.addEventListener('keydown', (evt) => {
//     if (evt.keyCode === 27) {
//       success.classList.add('hidden');
//     }
//   });
//   document.addEventListener('click', () => {
//     success.classList.add('hidden');
//   });
// };


const blockForm = (status) => {
  status = status || false;
  window.map.noticeForm.classList.toggle('notice__form--disabled', status);

  fields.forEach(function (elem) {
    elem.disabled = status;
  });
};

const removeFieldsInvalidity = () => {
  window.map.noticeForm.querySelectorAll('input, select, textarea').forEach(function (item) {
    item.classList.remove('invalid');
  });
};

const resetCoordOfMainPin = () => {
  window.map.mapPinMain.style.left = window.map.defaultPosition.x + 'px';
  window.map.mapPinMain.style.top = window.map.defaultPosition.y + 'px';
  window.map.addValueToAddressInput();
};

const deactivationForm = () => {
  // const mapPinsItems = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  window.map.noticeForm.reset();
  window.card.closeModal();
  window.pin.hidePins();
  blockForm(true);
  window.map.makeMapOfFaded(true);
  resetCoordOfMainPin();
  window.map.allowToRenderingPins = true;
};

const onSuccess = () => {
  window.data.showMessage('Ваше объявление успешно размещено!');
}


window.map.noticeForm.addEventListener('submit', (evt) => {
  window.backend.save(new FormData(window.map.noticeForm), onSuccess, window.data.onError);
  evt.preventDefault();
  // showSuccess();
  deactivationForm();  
});


resetBtn.addEventListener('click', deactivationForm)

window.form = {
  blockForm: blockForm
};