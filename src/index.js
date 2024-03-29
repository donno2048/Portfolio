import initTilt from './js/tilt';
import initSr from './js/sr';
import NewCursor, { clickEffect } from './js/cursor';
import fadeCube from './js/fadeCube';
import animation, { scene, black, white } from './js/3d';
import ballAnimation from './js/ball';
import './js/symbols';
import './js/bubbleColor'; //rightclick effect
import './style/main.scss';
(() => {
	var input = '', key = '38384040373937396665';
	document.addEventListener('keydown', function (e) {
		input = key.indexOf(input) ? "" : input + e.keyCode;
		if (input === key) {
			NewCursor();
			document.getElementById('ball').style.display = 'block'; // show text for ball
			ballAnimation();
		}
	});
})();
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js');
}
if (window.innerWidth < 180) {
	alert('Please use a larger screen to view this website.');
}
function toggleTheme() {
	const pageData = document.getElementsByTagName('html')[0].dataset;
	if (pageData.theme === 'dark') {
		pageData.theme = 'light';
		scene.background = white;
	} else {
		pageData.theme = 'dark';
		scene.background = black;
	}
}
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.addEventListener('click', clickEffect);
initSr();
initTilt();
fadeCube();
animation();