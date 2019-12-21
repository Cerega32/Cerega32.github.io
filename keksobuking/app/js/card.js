'use strict';

{
  const typeOutput = new Map([
    ['palace', 'Дворец'], 
    ['flat', 'Квартира'], 
    ['house', 'Дом'],
    ['bungalo', 'Бунгало']
  ]);



  const cardTemplate = document.querySelector('template')
    .content
    .querySelector('.map__card');

  const filtersContainer = document.querySelector('.map__filters-container');


  const renderCard = () => {
    let cardElement = window.map.map.querySelector('.map__card');

    if (!cardElement) {
      cardElement = cardTemplate.cloneNode(true);
      window.map.map.insertBefore(cardElement, filtersContainer);
      hideElement(cardElement);

      const popupClose = cardElement.querySelector('.popup__close');
      popupClose.addEventListener('click', function () {
        hideElement(cardElement);
        const pinActive = window.map.map.querySelector('.map__pin--active');
        pinActive.classList.remove('map__pin--active');
        document.removeEventListener('keydown', onPopupEscPress);
      });
    }
  };


  const fillCard = (element, pinData) => {

    element.querySelector('.popup__title').textContent = pinData.offer.title;
    element.querySelector('.popup__text--address').textContent = pinData.offer.address;
    element.querySelector('.popup__text--price').textContent = pinData.offer.price + '₽/ночь';
    element.querySelector('.popup__type').textContent = typeOutput.get(pinData.offer.type);
    element.querySelector('.popup__text--capacity').textContent = `${pinData.offer.rooms} комнаты для ${pinData.offer.guests} гостей`;
    element.querySelector('.popup__text--time').textContent = `Заезд после ${pinData.offer.checkin}, выезд до ${pinData.offer.checkout}`;
    
    const popupFeatures = element.querySelector('.popup__features');
    popupFeatures.innerHTML = pinData.offer.features.reduce((acc, value) => {
      return `<li class="feature feature--${value}"></li> ${acc}`
    }, '');
    
    element.querySelector('.popup__description').textContent = pinData.offer.description;
    
    const popupPhotos = element.querySelector('.popup__photos');
    popupPhotos.innerHTML = pinData.offer.photos.reduce((acc, value) => {
      return `<img src="${value}" width="40" height="40" class="popup__photo">${acc}`
    }, '');

    element.querySelector('.popup__avatar').src = pinData.author.avatar;

    return element;
  }

  const hideElement = (element) => {
    element.classList.add('hidden');
  };

  const showElement = (element) => {
    element.classList.remove('hidden');
  };


  const openModal = () => {
    const mapPins = window.pin.mapPins.querySelectorAll('.map__pin:not(.map__pin--main)');
    const card = window.map.map.querySelector('.map__card');

    mapPins.forEach((elem, i) => {
      elem.addEventListener('click', function () {
        closeModal();
        elem.classList.add('map__pin--active');
        fillCard(card, window.map.filteredPins[i]);
        showElement(card);

        document.addEventListener('keydown', onPopupEscPress);
      });
    });

  };


  const closeModal = () => {
    const card = window.map.map.querySelector('.map__card');
    if (card) {
      hideElement(card);
      document.removeEventListener('keydown', onPopupEscPress);

      const activePin = window.pin.mapPins.querySelector('.map__pin--active');
      if (activePin) {
        activePin.classList.remove('map__pin--active');
      }
    }
  };

  const onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  };



  window.card = {
    renderCard,
    openModal,
    closeModal
  };


}