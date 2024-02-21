const doc = document;
const canvas = doc.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.clientWidth;
const cHeight = canvas.clientHeight;

const scaleX = 30;
const scaleY = 30;
const shiftDigit = 5;
const shiftAxisText = 20;

const xAxis = Math.round(cWidth / scaleX / 2) * scaleX;
const yAxis = Math.round(cHeight/ scaleY / 2) * scaleY;

ctx.font = `${Math.round(scaleX / 2)}px Arial`;
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

// grid
ctx.beginPath();
ctx.strokeStyle = '#fcfcf5';

for (let i = 0; i <= cWidth; i += scaleX) {
  ctx.moveTo(i, 0);
  ctx.lineTo(i, cHeight);

  // draw digits
  ctx.fillText(( i - xAxis ) / scaleX, i + shiftDigit, yAxis + shiftDigit);
}
for (let i = 0; i <= cHeight; i += scaleY) {
  ctx.moveTo(0, i);
  ctx.lineTo(cWidth, i);

  // draw digits
  ctx.fillText(( yAxis - i ) / scaleY, xAxis + shiftDigit, i + shiftDigit);
}

ctx.stroke();
ctx.closePath();

// axis
ctx.beginPath();
ctx.strokeStyle = 'black';

ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, cHeight);
ctx.fillText('y', xAxis - shiftAxisText, 0);

ctx.moveTo(0, yAxis);
ctx.lineTo(cWidth, yAxis);
ctx.fillText('x', cWidth - shiftAxisText, yAxis - shiftAxisText);

ctx.stroke();
ctx.closePath();

/*
xCanvas = xAxis + xDec * scaleX
yCanvas = yAxis - yDec * scaleY
xDec = (xCanvas - xAxis) / scaleX
yDec = (yAxis - yCanvas) / scaleY
*/ 

// graphik

// y = x^2;
ctx.beginPath();
ctx.fillStyle = 'red';
for (let i = 0; i <= cWidth; i++) {
  const x = (i - xAxis) / scaleX;
  const y = x ** 2;

  ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}
ctx.closePath;

// y = -0.4x^2 + 2x + 4;
ctx.beginPath();
ctx.fillStyle = 'green';
for (let i = 0; i <= cWidth; i++) {
  const x = (i - xAxis) / scaleX;
  const y = -0.4 * x ** 2 + 2 * x + 4;

  ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}
ctx.closePath;

// y = exp(x^2);
ctx.beginPath();
ctx.fillStyle = 'blue';
for (let i = 0; i <= cWidth; i++) {
  const x = (i - xAxis) / scaleX;
  const y = Math.exp(-(x ** 2));

  ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}
ctx.closePath;

