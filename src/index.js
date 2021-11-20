import initTilt from './js/tilt';
import initSr from './js/sr';
import NewCursor, {clickEffect} from './js/cursor';
import fadeCube from './js/fadeCube';
import animation, {scene, black} from './js/3d';
import './js/bubbleColor'; //rightclick effect
import './style/main.scss';
(() => {
  var input = '', key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input = key.indexOf(input) ? "" : input + e.keyCode;
    if (input === key) scene.background = black;
  });
})()
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});
document.addEventListener('click', clickEffect);
initSr();
initTilt();
//NewCursor(); // this is ugly
fadeCube();
animation();
