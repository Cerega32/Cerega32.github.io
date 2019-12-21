'use strict';
{

  const map = document.querySelector('.map');
  const mapPinMain = document.querySelector('.map__pin--main');

  const noticeForm = document.querySelector('.notice__form');
  const addressInput = noticeForm.querySelector('input[name="address"]');
  const debounceInterval = 500;
  
  const pinMainSize = {
    width: 65,
    height: 85
  };
  
  const defaultPosition = {
    x: 570,
    y: 375
  };

  const borderPosition = {
    xMin: 0,
    xMax: map.offsetWidth - pinMainSize.width,
    yMin: 130 - pinMainSize.height,
    yMax: 630 - pinMainSize.height
  }
  

  const makeMapOfFaded = (status) => {
    status = status || false;
    map.classList.toggle('map--faded', status);
  };

  const addValueToAddressInput = () => {
    const mainPinX = (parseInt(mapPinMain.style.left, 10) + Math.floor(pinMainSize.width / 2));
    const mainPinY = (parseInt(mapPinMain.style.top, 10) + pinMainSize.height);
    addressInput.value = `${mainPinX}, ${mainPinY}`;
  };

  mapPinMain.style.left = defaultPosition.x + 'px';
  mapPinMain.style.top = defaultPosition.y + 'px';
  addValueToAddressInput();


  window.filters.blockFilters(true);

  const onLoad = (array) => {
    window.map.data = array;
    updatePins();
  };

  const onError = (message) => {
    window.data.showMessage(message);
  };

  const updatePins = () => {
    window.card.closeModal();
    window.pin.hidePins();
    window.map.filteredPins = window.filters.filterForm(window.map.data);
    window.pin.renderPins(window.map.filteredPins);
  };

  var onFiltersChange = window.debounce(updatePins, debounceInterval);


  window.filters.mapFilters.addEventListener('change', onFiltersChange);









  mapPinMain.addEventListener('mousedown', (evt) => {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    }
    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      
      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      }

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      }
      
      if (mapPinMain.offsetLeft - shift.x <= borderPosition.xMin) {
        mapPinMain.style.left = `${borderPosition.xMin}px`;
      } else if (mapPinMain.offsetLeft - shift.x >= borderPosition.xMax) {
        mapPinMain.style.left = `${borderPosition.xMax}px`;
      } else {
        mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
      }
      if (mapPinMain.offsetTop - shift.y <= borderPosition.yMin) {
        mapPinMain.style.top = `${borderPosition.yMin}px`;
      } else if (mapPinMain.offsetTop - shift.y >= borderPosition.yMax) {
        mapPinMain.style.top = `${borderPosition.yMax}px`;
      } else {
        mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
      }


      addValueToAddressInput()
    }

    const onMouseUp = (upEvt) => {    
      upEvt.preventDefault();


      makeMapOfFaded(false);
      window.filters.blockFilters(false);
      window.form.blockForm(false);
      // window.pin.hidePins();
      // if (window.map.allowToRenderingPins) {
      //   window.pin.renderPins(window.data.data);
      // }
      window.backend.load(onLoad, onError);
      window.card.renderCard();
      addValueToAddressInput();

      
      window.card.openModal();
      window.map.allowToRenderingPins = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  })


  window.map = {
    map,
    mapPinMain,
    noticeForm,
    makeMapOfFaded,
    defaultPosition,
    addValueToAddressInput,
    allowToRenderingPins: true
  }
}