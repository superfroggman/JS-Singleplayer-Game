function onLoad() {
  var c = <HTMLCanvasElement>document.getElementById("mainCanvas");
  var ctx = c.getContext("2d");
  if (ctx) {
    ctx.beginPath();
    ctx.rect(20, 20, 100, 100);
    ctx.stroke();
  }
}
