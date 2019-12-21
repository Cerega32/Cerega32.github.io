'use strict';

const debounceInterval = 500;
let lastTimeout;

const removeDebounce = function (callback) {
  if (lastTimeout) {
    clearTimeout(lastTimeout);
  }

  lastTimeout = setTimeout(callback, debounceInterval);
};


window.debounce = removeDebounce;