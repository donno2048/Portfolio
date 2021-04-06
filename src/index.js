import initTilt from './js/tilt';
import initSr from './js/sr';
import NewCursor from './js/cursor';
import fadeCube from './js/fadeCube';
import './js/bubbleColor'; //rightclick effect
import './style/main.scss';
(() => { //ToDo: better konami code
  var input = '', key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input = key.indexOf(input) ? "" : input + e.keyCode;
    if (input === key) alert('\\o/\n  |\n/  \\');
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
initSr();
initTilt();
NewCursor();
fadeCube();