var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.querySelector(".min");
var secHead = document.querySelector(".sec");
var msecHead = document.querySelector(".msec");
var start = document.querySelector(".start");
var interval;
function timer() {
  msec++;
  msecHead.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    secHead.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minHead.innerHTML = min;
    sec = 0;
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
