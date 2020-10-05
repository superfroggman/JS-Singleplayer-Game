let i = -100;

function onLoad() {
  var c = <HTMLCanvasElement>document.getElementById("mainCanvas");
  var ctx = c.getContext("2d");

  ctx?.clearRect(0,0,c.width, c.height)
  
  if (ctx) {
    ctx.beginPath();
    ctx.rect(i, 20, 100, 100);
    ctx.fill();
    ctx.stroke();
  }

  i+= 10;
  if(i> c.width) i = -100;

  requestAnimationFrame(onLoad);
}
