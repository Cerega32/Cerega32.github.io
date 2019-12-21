const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('select[name=housing-type]');
const housingPrice= mapFilters.querySelector('select[name=housing-price]');
const housingRooms = mapFilters.querySelector('select[name=housing-rooms]');
const housingGuests = mapFilters.querySelector('select[name=housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');
const anyValue = 'any';


// housingType.addEventListener('change', () => {
//   let newPins = window.data.data.slice();
//   window.pin.hidePins(true);
  
//   if (housingType.value === "any") {
//     newPins = newPins;
//   } else if (housingType.value === "flat") {
//     newPins = newPins.filter((element) => {
//       return element.offer.type === 'flat'
//     });
//   } else if (housingType.value === "house") {
//     newPins = newPins.filter((element) => {
//       return element.offer.type === 'house'
//     });
//   } else {
//     newPins = newPins.filter((element) => {
//       return element.offer.type === 'bungalo'
//     });
//   }

//   window.pin.renderPins(newPins);
// })

const blockFilters = (status) => {
  status = status || false;
  const fields = window.filters.mapFilters.querySelectorAll('input, select');
  fields.forEach((elem) => {
    elem.disabled = status;
  });
};


const filterValues = (value, filterValue) => {
  return filterValue === anyValue || filterValue === value.toString();
};

const filterPrice = function (price) {
  switch (true) {
    case price < 10000:
      return 'low';
    case price > 50000:
      return 'high';
    default:
      return 'middle';
  }
};

const filterFeatures = (features) => {
  let result = true;

  housingFeatures.querySelectorAll('input:checked').forEach(function (item) {
    if (features.indexOf(item.value) === -1) {
      result = false;
    }
  });

  return result;
};

const filterForm = (pins) => {
  return pins.filter((pin) => {
    return filterValues(pin.offer.type, housingType.value) &&
      filterValues(filterPrice(pin.offer.price), housingPrice.value) &&
      filterValues(pin.offer.rooms, housingRooms.value) &&
      filterValues(pin.offer.guests, housingGuests.value) &&
      filterFeatures(pin.offer.features);
  });
};
window.filters = {
  filterForm,
  mapFilters,
  blockFilters
};
