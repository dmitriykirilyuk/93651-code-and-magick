"use strict";

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = "#000000"
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 120, 40);
  ctx.fillText("Список результатов:", 120, 65);
};


var histoHeight = 150;
var histoWidth = 40;

var canvas = document.querySelector("canvas");
window.renderStatistics(canvas.getContext("2"), ["Дмитрий", "Атнон", "Я"], [7.22, 18.44, 26.11]);
