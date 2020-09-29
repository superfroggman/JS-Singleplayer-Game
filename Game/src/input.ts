let w = false;
let a = false;
let s = false;
let d = false;

//Checking for key inputs
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      w = true;
      break;
    case "a":
      a = true;
      break;
    case "s":
      s = true;
      break;
    case "d":
      d = true;
      break;
  }
});

document.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "w":
      w = false;
      break;
    case "a":
      a = false;
      break;
    case "s":
      s = false;
      break;
    case "d":
      d = false;
      break;
  }
});
