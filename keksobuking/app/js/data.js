'use strict';

{

  // const titleOffer = [
  //   'Большая уютная квартира',
  //   "Маленькая неуютная квартира", 
  //   "Огромный прекрасный дворец", 
  //   "Маленький ужасный дворец", 
  //   "Красивый гостевой домик", 
  //   "Некрасивый негостеприимный домик", 
  //   "Уютное бунгало далеко от моря", 
  //   "Неуютное бунгало по колено в воде"
  // ]

  // const typeOffer = [
  //   'palace', 'flat', 'house', 'bungalo'
  // ]

  // const checkinOffer = [
  //   '12:00', '13:00', '14:00'
  // ]

  // const featuresOffer = [
  //   "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"
  // ]

  // const photosOffer = [
  //   "http://o0.github.io/assets/images/tokyo/hotel1.jpg", 
  //   "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  //   "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
  // ]


  const pinSize = {
    width: 50,
    height: 70
  };


  // const randomizer = (min, max = false, arr) => {
  //   if (!Array.isArray(min)) {
  //     return Math.floor(min + Math.random() * (max + 1 - min));
  //   }
  //   const rand = Math.floor(Math.random() * (min.length));
  //   if (arr) {
  //     const copyArr = [...min];
  //     let newArr = [];
  //     for(let i = 0; i < max; i++) {
  //       newArr = [...newArr, randomizer(copyArr, true)];
  //     }
  //     return newArr;
  //   }
  //   if(max === false) {
  //     return min[rand];
  //   }
  //   return min.splice(rand, 1).join();
  // }



  // const makeArray = (maps) => {
  //   return maps.map((value, index) => {
  //     value = {
  //       author: {
  //         avatar: `img/avatars/user${(index < 10 ? '0' : '')}${(index + 1)}.png`
  //       },
  //       location: {
  //         x: randomizer(300, 900),
  //         y: randomizer(130, 630)
  //       },
  //       offer: {
  //         title: randomizer(titleOffer, true),
  //         address: '',
  //         price: randomizer(1000, 1000000),
  //         type: randomizer(typeOffer),
  //         rooms: randomizer(1, 5),
  //         guests: randomizer(1, 10),
  //         checkin: randomizer(checkinOffer),
  //         checkout: randomizer(checkinOffer),
  //         features: randomizer(featuresOffer, randomizer(1, featuresOffer.length), true),
  //         description: '',
  //         photos: randomizer(photosOffer, photosOffer.length, true)
  //       }      
  //     }
  //     value.offer.address = `${value.location.x}, ${value.location.y}`
  //     return value;
  //   })
  // }



  // const maps = [{}, {}, {}, {}, {}, {}, {}, {}];
  // const pinsData = makeArray(maps);

  const onLoad = (array) => {
    window.data.data = array;
  };

  const onError = (message) => {
    showMessage(message);
  };

  window.backend.load(onLoad, onError);



  const messageBlock = document.querySelector('.success');
  const textMessage = messageBlock.querySelector('.success__message');

  const onMessageClick = () => {
    messageBlock.classList.add('hidden');
    document.removeEventListener('click', onMessageClick);
    document.removeEventListener('keydown', onMessageEscPress);
  };
  
  const onMessageEscPress = (evt) => {
    if (evt.keyCode === 27) {
      messageBlock.classList.add('hidden');
      document.removeEventListener('click', onMessageClick);
      document.removeEventListener('keydown', onMessageEscPress);
    }
  };
  
  const hideMessageByTime = () => {
    setTimeout(() => {
      messageBlock.classList.add('hidden');
      document.removeEventListener('click', onMessageClick);
      document.removeEventListener('keydown', onMessageEscPress);
    }, 5000);
  };
  
  const showMessage = (message) => {
    messageBlock.classList.remove('hidden');
    textMessage.textContent = message;

    document.addEventListener('click', onMessageClick);
    document.addEventListener('keydown', onMessageEscPress);

    hideMessageByTime();
  };
  
  
  window.data = {
    pinSizeWidth: pinSize.width,
    pinSizeHeight: pinSize.height,
    showMessage,
    onError
  }
}
