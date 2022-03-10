var timer = null;
var keyCode = null;
function setup() {
  var circleElm = document.getElementById('circle');
  circleElm.style.opacity = '1';
  // circleElm.addEventListener('click', onClickCircle);
  document.addEventListener('keydown', onKeyDown);
}

document.addEventListener('DOMContentLoaded', setup);

function onClickCircle() {
  // var circleElm = document.getElementById('circle');
  // this.style.backgroundColor = 'blue';
  // var circleOpacity = parseFloat(this.style.opacity);
  // if (circleOpacity < 1.0) {
  //   this.style.opacity = circleOpacity + 0.1;
  // }
  // setInterval(circleTimer, 10);

  var circleElm = document.getElementById('circle');
  var positionLeft = circleElm.offsetLeft;
  circleElm.style.left = positionLeft - 10 +'px';

}

function onKeyDown(event) {
  // var circleElm = document.getElementById('circle');
  // var positionLeft = circleElm.offsetLeft;
  // var positionTop = circleElm.offsetTop;
  // if (positionLeft >= 0 && event.keyCode == 37) { //left
  //   circleElm.style.left = positionLeft - 10 +'px';
  // }
  // else if(event.keyCode == 39) { //right
  //   circleElm.style.left = positionLeft + 10 +'px';
  // }
  // else if (positionTop >= 0 && event.keyCode == 38) { //up
  //   circleElm.style.top = positionTop - 10 +'px';
  // }
  // else if (event.keyCode == 40) { //down
  //   circleElm.style.top = positionTop + 10 +'px';
  // }
  if (timer != null) {
    clearInterval(timer);
  }
  keyCode = event.keyCode;
  timer = setInterval(animateCircle, 10);
}

function circleTimer(elm) {
  var circleElm = document.getElementById('circle');
  var circleOpacity = parseFloat(circleElm.style.opacity);
  if (circleOpacity >= 0) {
    circleElm.style.opacity = circleOpacity - 0.01;
  }
}

function animateCircle() {
  var circleElm = document.getElementById('circle');
  var positionLeft = circleElm.offsetLeft;
  var positionTop = circleElm.offsetTop;
  if (keyCode == 32) {
    clearInterval(timer);
  }
  if (positionLeft >= 0 && keyCode == 37) { //left
    circleElm.style.left = positionLeft - 1 +'px';
  }
  else if(keyCode == 39) { //right
    circleElm.style.left = positionLeft + 1 +'px';
  }
  else if (positionTop >= 0 && keyCode == 38) { //up
    circleElm.style.top = positionTop - 1 +'px';
  }
  else if (keyCode == 40) { //down
    circleElm.style.top = positionTop + 1 +'px';
  }
}

function myKeyDown(event) {
  console.log(event.keyCode);
}
document.addEventListener('keydown', myKeyDown);
