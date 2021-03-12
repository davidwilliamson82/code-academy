const canvas = document.getElementById('my-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
let row = 2;
let skeleton = {
  x: 150,
  y: 150,
  walkingSpeed: 40
};

let wPressed = false;
let aPressed = false;
let sPressed = false;
let dPressed = false;
document.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;
  if (keyCode === 87) {
    row = 0;
    wPressed = true;
  }
  if (keyCode === 65) {
    row = 1;
    aPressed = true;
  }
  if (keyCode === 83) {
    row = 2;
    sPressed = true;
  }
  if (keyCode === 68) {
    row = 3;
    dPressed = true;
  }
  
}, false);

document.addEventListener('keyup', (event) => {
  const keyCode = event.keyCode;
  if (keyCode === 87) {
    wPressed = false;
  }
  if (keyCode === 65) {
    aPressed = false;
  }
  if (keyCode === 83) {
    sPressed = false;
  }
  if (keyCode === 68) {
    dPressed = false;
  }
  
}, false);

const skel = new Image();
skel.src = 'img/skel.png';

let frame = 0;
let timestamp = performance.now();
let frameTime = timestamp;
let screenInterval;
function animate () {
  screenInterval = (performance.now() - timestamp) / 1000;
  timestamp = performance.now();
  if (wPressed || aPressed || sPressed || dPressed) {
    if (timestamp - frameTime > 100) {
      frameTime = timestamp;
      frame = (frame + 1) % 9;
    }
  } else {
    frame = 0;
  }
  if (wPressed) {
    skeleton.y -= skeleton.walkingSpeed * screenInterval;
  }
  if (aPressed) {
    skeleton.x -= skeleton.walkingSpeed * screenInterval;
  }
  if (sPressed) {
    skeleton.y += skeleton.walkingSpeed * screenInterval;
  }
  if (dPressed) {
    skeleton.x += skeleton.walkingSpeed * screenInterval;
  }

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#32a852';

  ctx.drawImage(
    skel,
    frame * 64, // sx
    row * 64, // sy
    64, // swidth
    64, // swidth
    skeleton.x, // dx
    skeleton.y, // dy
    128, // dwidth
    128 // dheight
  );
  requestAnimationFrame(animate);

}
skel.addEventListener('load', function() {
  animate();
}, false);
