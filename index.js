// right button -----------------------
const previousElementRightButton = (id) => {
  const previousElement = document.querySelector(`[data-img='${(id - 1).toString()}']`);
  previousElement.classList.remove('previous');
  previousElement.classList.add('hiddenLeft');
};
const currentElementRightButton = (id) => {
  const currentElement = document.querySelector(`[data-img='${(id).toString()}']`);
  currentElement.classList.remove('current');
  currentElement.classList.add('previous');
};
const nextElementRightButton = (id) => {
  const nextElement = document.querySelector(`[data-img='${(id + 1).toString()}']`);
  nextElement.classList.remove('next');
  nextElement.classList.add('current');
};
const hiddenElementRightButton = (id) => {
  const hiddenElement = document.querySelector(`[data-img='${(id + 2).toString()}']`);
  hiddenElement.classList.remove('hiddenRight');
  hiddenElement.classList.add('next');
};

// left button -----------------------
const hiddenElementLeftButton = (id) => {
  const hiddenElement = document.querySelector(`[data-img='${(id - 2).toString()}']`);
  hiddenElement.classList.remove('hiddenLeft');
  hiddenElement.classList.add('previous');
};
const previousElementLeftButton = (id) => {
  const previousElement = document.querySelector(`[data-img='${(id - 1).toString()}']`);
  previousElement.classList.remove('previous');
  previousElement.classList.add('current');
};
const currentElementLeftButton = (id) => {
  const currentElement = document.querySelector(`[data-img='${(id).toString()}']`);
  currentElement.classList.remove('current');
  currentElement.classList.add('next');
};
const nextElementLeftButton = (id) => {
  const nextElement = document.querySelector(`[data-img='${(id + 1).toString()}']`);
  nextElement.classList.remove('next');
  nextElement.classList.add('hiddenRight');
};

// button activation -----------------------
const disableRightButton = () => {
  const rightBtn = document.querySelector('#right');
  rightBtn.classList.add('inactive');
};
const disableLeftButton = () => {
  const leftBtn = document.querySelector('#left');
  leftBtn.classList.add('inactive');
};
const enableRightButton = () => {
  const rightBtn = document.querySelector('#right');
  rightBtn.classList.remove('inactive');
};
const enableLeftButton = () => {
  const leftBtn = document.querySelector('#left');
  leftBtn.classList.remove('inactive');
};

let currImgId = 1;

const next = (id) => {
  if (currImgId === 1) {
    enableLeftButton();
    currentElementRightButton(id);
    nextElementRightButton(id);
    hiddenElementRightButton(id);
  } if (currImgId === 2 || currImgId === 3) {
    enableLeftButton();
    previousElementRightButton(id);
    currentElementRightButton(id);
    nextElementRightButton(id);
    hiddenElementRightButton(id);
  } if (currImgId === 4) {
    disableRightButton();
    previousElementRightButton(id);
    currentElementRightButton(id);
    nextElementRightButton(id);
  }
  currImgId += 1;
};

const previous = (id) => {
  console.log('previous');
  if (currImgId === 2) {
    previousElementLeftButton(id);
    currentElementLeftButton(id);
    nextElementLeftButton(id);
  } if (currImgId === 3 || currImgId === 4) {
    hiddenElementLeftButton(id);
    previousElementLeftButton(id);
    currentElementLeftButton(id);
    nextElementLeftButton(id);
  } if (currImgId === 5) {
    hiddenElementLeftButton(id);
    previousElementLeftButton(id);
    currentElementLeftButton(id);
    enableRightButton();
  }
  currImgId -= 1;
};

const left = document.querySelector('#left');
const right = document.querySelector('#right');

left.addEventListener('click', () => { previous(currImgId); });
right.addEventListener('click', () => { next(currImgId); });
