var min1 = 0;
var sec1 = 0;
var msec1 = 0;
var min2Head = document.querySelector(".min1");
var sec2Head = document.querySelector(".sec1");
var minsec2Head = document.querySelector(".msec1");
var start = document.querySelector(".start");
var interval;
function timer() {
  msec1++;
  minsec2Head.innerHTML = msec1;
  if (msec1 >= 100) {
    sec1++;
    sec2Head.innerHTML = sec1;
    msec1 = 0;
  } else if (sec1 >= 60) {
    min1++;
    min2Head.innerHTML = min1;
    sec1 = 0;
  }
}

function onWatch() {
  interval = setInterval(timer, 10);
  start.setAttribute("disabled", "disabled");
}

function pauseWatch() {
  clearInterval(interval);
  start.removeAttribute("disabled");
}

function resetWatch() {
  start.removeAttribute("disabled");
  min1 = 0;
  sec1 = 0;
  msec1 = 0;
  min2Head.innerHTML = min1;
  sec2Head.innerHTML = sec1;
  minsec2Head.innerHTML = msec1;
  clearInterval(interval);
}