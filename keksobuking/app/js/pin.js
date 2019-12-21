'use strict';

{
  const template = document.querySelector('template');
  const mapPins = document.querySelector('.map__pins');
  const mapPinTemplate = template.content.querySelector('.map__pin');


  const makePins = (pin) => {  
    const pinElement = mapPinTemplate.cloneNode(true);

    // pinElement.classList.add('hidden');

    pinElement.style.left = `${pin.location.x - window.data.pinSizeWidth / 2}px`;
    pinElement.style.top = `${pin.location.y - window.data.pinSizeHeight}px`;

    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.offer.title;
    
    return pinElement;
  }

  const renderPins = (pins) => {
    const fragment = document.createDocumentFragment();
    if (pins.length > 5) {
      pins.length = 5;
    }
    for (let i = 0; i < pins.length; i++) {
      fragment.appendChild(makePins(pins[i]));
    }
    mapPins.appendChild(fragment);
    window.card.openModal();
  }

  const hidePins = () => {
    // status = status || false;
    // const mapPinsSmall = mapPins.querySelectorAll('.map__pins button:not(.map__pin--main)');
    // mapPinsSmall.forEach((elem) => {
    //   elem.classList.toggle('hidden', status);
    // });
    var mapPinsNotMain = document.querySelectorAll('.map__pins button:not(.map__pin--main)');
    mapPinsNotMain.forEach(function (item) {
      mapPins.removeChild(item);
    });
  };

  
  window.pin = {
    mapPins,
    renderPins,
    hidePins
  }


  

}











// const mapCard = template.content.querySelector('.map__card');

// mapPinMain.style.left = defaultPosition.x + 'px';
// mapPinMain.style.top = defaultPosition.y + 'px';
// addValueToAddressInput();

// mapPinMain.addEventListener('mousedown', (evt) => {
//   evt.preventDefault();
  
//   let startCoords = {
//     x: evt.clientX,
//     y: evt.clientY
//   }
  
//   const onMouseMove = (moveEvt) => {
//     moveEvt.preventDefault();
    
//     const shift = {
//       x: startCoords.x - moveEvt.clientX,
//       y: startCoords.y - moveEvt.clientY
//     }
    
//     startCoords = {
//       x: moveEvt.clientX,
//       y: moveEvt.clientY
//     }
    
//     if (mapPinMain.offsetLeft - shift.x <= borderPosition.xMin) {
//       mapPinMain.style.left = `${borderPosition.xMin}px`;
//     } else if (mapPinMain.offsetLeft - shift.x >= borderPosition.xMax) {
//       mapPinMain.style.left = `${borderPosition.xMax}px`;
//     } else {
//       mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
//     }
//     if (mapPinMain.offsetTop - shift.y <= borderPosition.yMin) {
//       mapPinMain.style.top = `${borderPosition.yMin}px`;
//     } else if (mapPinMain.offsetTop - shift.y >= borderPosition.yMax) {
//       mapPinMain.style.top = `${borderPosition.yMax}px`;
//     } else {
//       mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
//     }
    
    
//     addValueToAddressInput()
//   }
  
//   const onMouseUp = (upEvt) => {    
//     upEvt.preventDefault();
    
//     map.classList.remove('map--faded');
//     noticeForm.classList.remove('notice__form--disabled');
//     addValueToAddressInput();
//     openModal();
//     changePriceFromType();
    
//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseup', onMouseUp);
//   }
  
//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', onMouseUp);
// })
