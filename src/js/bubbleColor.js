function Color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
window.addEventListener('load', function () {const bubbles = document.getElementsByClassName("bubbles")[0].childNodes;document.addEventListener('contextmenu', (e) => {e.preventDefault();bubbles[Math.floor(Math.random() * bubbles.length)].style.background=Color();}, false);})