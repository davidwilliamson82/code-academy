const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

let hasStarted = false;
let isRunning = false;
let timestamp;
let measuredTime;
let pauseTime;
let milliseconds;
let seconds;
let minutes;
let hours;

startButton.addEventListener('click', function () {
  if (isRunning) {
    isRunning = false;
    startButton.innerText = 'RESUME';
    pauseTime = Date.now();
  } else {
    isRunning = true;
    startButton.innerText = 'STOP';
    if (!hasStarted) {
      timestamp = Date.now();
    } else {
      timestamp += Date.now() - pauseTime;
    }
    hasStarted = true;
    animate();
  }
});

resetButton.addEventListener('click', function () {
  timestamp = Date.now();
});

function animate () {
  if (isRunning) {
    measuredTime = Date.now() - timestamp;
    milliseconds = ((measuredTime % 1000) % 1000).toString().padStart(3, '0');
    seconds = (Math.floor(measuredTime / 1000) % 60).toString().padStart(2, '0');
    minutes = (Math.floor(measuredTime / 60000) % 60).toString().padStart(2, '0');
    hours = (Math.floor(measuredTime / 3600000) % 24).toString().padStart(2, '0');
    timer.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  requestAnimationFrame(animate);
}

