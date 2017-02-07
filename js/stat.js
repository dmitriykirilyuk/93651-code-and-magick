'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 300);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 300);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 65);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 150;
  var step = histoHeight / max;
  var columnIndent = 50;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];
    var textCoordinatesX = histoX + columnIndent * i;
    var height = step * time;

    ctx.fillText(time.toFixed(0), textCoordinatesX, 90);

    if (name === 'Вы!') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(21, 96, 189, ', (Math.random()).toFixed(1), ')'].join('');
    }
    ctx.fillRect(textCoordinatesX, 100, 40, height);

    ctx.fillStyle = 'purple';
    ctx.fillText(name, textCoordinatesX, 100 + histoHeight + 20);
  }
};

var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), ['Аня', 'Коля', 'Вы!', 'Юра', 'Сеня'], [7.22, 18.44, 26.11, 11.22, 15.44]);
