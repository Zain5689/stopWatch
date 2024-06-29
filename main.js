let timer = null;
let [second, minuite, hours] = [0, 0, 0];
let display = document.getElementById("display");
console.log(display);

function stopwatch() {
  second++;
  if (second == 60) {
    second = 0;
    minuite++;
    if (minuite == 60) {
      minuite = 0;
      hours++;
    }
  }

  let h = hours > 10 ? hours : "0" + hours;
  let m = minuite > 10 ? minuite : "0" + minuite;
  let s = second > 10 ? second : "0" + second;

  display.innerHTML = h + ":" + m + ":" + s;
}

function start() {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(stopwatch, 1000);
}
function stop() {
  clearInterval(timer);
}
function reset() {
  clearInterval(timer);
  [second, minuite, hours] = [0, 0, 0];
  display.innerHTML = "00:00:00";
}
