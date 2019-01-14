const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.hight = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '10';
// ctx.globalCompositeOperation ='multiply';
ctx.globalCompositeOperation = 'color';
// ctx.globalCompositeOperation = 'lighter';


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let directon = true;

function draw(e) { 
  if(!isDrawing) return; //stop the fn from running when the mouse is not down
  ctx. strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath()
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // lastX = e.offsetX;
  // lastY = e.offsetY; //in one line - destructuring an array
  [lastX, lastY]=[e.offsetX, e.offsetY];
  hue ++;
  if(hue >= 360) {
        hue = 0;
    }
  if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        directon = !directon;
    };

  if(directon) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}


canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);