const errorElement = document.querySelector('#error').content.querySelector('section').cloneNode(true);

export const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export const comparePhotos = (photoA, photoB) => photoB.likes - photoA.likes;

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const validHashTag = (value) => {
  const hashtagsList = value.split(/(?=#)/g);
  const hashtagCondition = /^#[a-zа-я0-9]{1,19}$/i;
  if(hashtagsList[0] === ''){
    return true;
  }
  for (let i = 0; i < hashtagsList.length; i++){
    if(!hashtagCondition.test(hashtagsList[i])){
      return false;
    }
  }
  return true;
};

export const showAlertMessage = (message) =>{
  errorElement.querySelector('.error__title').textContent = message;
  const reloadButton = errorElement.querySelector('.error__button');
  reloadButton.classList.add('hidden');
  document.querySelector('body').appendChild(errorElement);
};

export const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
