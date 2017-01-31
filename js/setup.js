var setupWindow = document.querySelector(".setup");
var setupOpen = document.querySelector(".setup-open");
var setupClose = document.querySelector(".setup-close");

var wizardCoat = document.querySelector("#wizard-coat");/*здесь нормально, то что я искал через .documentб а не название родителя #wizard ?*/
var wizardCoatColors = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];

var wizardEyes = document.querySelector("#wizard-eyes");
var wizardEyesColors = [
  "black",
  "red",
  "blue",
  "yellow",
  "green"
];

var fireballWrap = document.querySelector(".setup-fireball-wrap");
var fireballWrapColors = [
  "#ee4830",
  "#30a8ee",
  "#5ce6c0",
  "#e848d5",
  "#e6e848"
];

setupOpen.addEventListener("click", function() {
  setupWindow.classList.remove("invisible");
});

setupClose.addEventListener("click", function() {
  setupWindow.classList.add("invisible");
});

wizardCoat.addEventListener("click", function() {
  wizardCoat.style.fill = wizardCoatColors[
    Math.floor(Math.random() * wizardCoatColors.length)
  ];
});

wizardEyes.addEventListener("click", function() {
  wizardEyes.style.fill = wizardEyesColors[
    Math.floor(Math.random() * wizardEyesColors.length) /*почему хдесь не нужно ставить ";" ?*/
  ];
});

fireballWrap.addEventListener("click", function() {
  fireballWrap.style.background = fireballWrapColors[
    Math.floor(Math.random() * fireballWrapColors.length)
  ];
});
