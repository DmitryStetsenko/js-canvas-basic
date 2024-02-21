const doc = document;
const canvas = doc.querySelector('#canvas_basic');
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 100, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 200, 200);

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(320, 300);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.closePath();

ctx.font = '30px Arial';
ctx.textAlign = 'left'; // right
ctx.textBaseline = 'bottom'; // top
ctx.fillText('Text', 300, 400);
ctx.fillRect(300, 400, 2, 2);