import tilt from 'tilt.js';
tilt; // make code scanning not to say import never used
const initTilt = () => {$('img,h1,.about-wrapper__info-text').tilt();};
export default initTilt;