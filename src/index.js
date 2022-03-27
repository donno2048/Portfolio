import initTilt from './js/tilt';
import initSr from './js/sr';
import NewCursor, {clickEffect} from './js/cursor';
import fadeCube from './js/fadeCube';
import animation, {scene, black} from './js/3d';
import ballAnimation from './js/ball';
import './js/bubbleColor'; //rightclick effect
import './style/main.scss';
(() => {
  var input = '', key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input = key.indexOf(input) ? "" : input + e.keyCode;
    if (input === key) {
      scene.background = black;
      NewCursor();
      document.getElementById('ball').style.display = 'block'; // show text for ball
      ballAnimation();
    }
  });
})();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js');
}
document.addEventListener('click', clickEffect);
initSr();
initTilt();
fadeCube();
animation();