function fade(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            document.body.style.display = 'initial';
            document.body.style.perspective = 'initial';
            document.getElementById('undisplay').disabled = true;
            var resizeEvent = window.document.createEvent('UIEvents'); 
            resizeEvent.initUIEvent('resize', true, false, window, 0); 
            window.dispatchEvent(resizeEvent);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function fadeCube() {
    var curTime = Date.now();
    window.onload = function() {
      var childs = document.getElementsByClassName("cubes")[0].childNodes;
      var difTime = Date.now() - curTime;
      while (difTime % 500 < 400 || difTime < 2000) {difTime = Date.now() - curTime;}
      setTimeout(() => {for (var i = 0; i < childs.length; i++) fade(childs[i]);}, 50);
      document.getElementsByTagName('canvas')[0].style.display = 'block';
    };
}
export default fadeCube;