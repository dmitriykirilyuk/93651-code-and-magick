'use strict';
var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballWrap = document.querySelector('.setup-fireball-wrap');
var fireballWrapColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var getMathRandom = function (length) {
  return Math.floor(Math.random() * length);
};
setupOpen.addEventListener('click', function () {
  setupWindow.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setupWindow.classList.add('invisible');
});

wizardCoat.addEventListener('click', function () {
  var color = getMathRandom(wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[color];
});

wizardEyes.addEventListener('click', function () {
  var color = getMathRandom(wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[color];
});

fireballWrap.addEventListener('click', function () {
  var color = getMathRandom(fireballWrapColors.length);
  fireballWrap.style.background = fireballWrapColors[color];
});
