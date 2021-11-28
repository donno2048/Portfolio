function clickEffect(e) {
    var div = document.createElement("div");
    div.style.top = `${e.clientY}px`;
    div.style.left = `${e.clientX}px`;
    div.style.position = "fixed";
    div.style.borderStyle = "solid";
    div.style.borderColor = "black";
    div.style.borderRadius = "50%";
    div.id = "ripple";
    document.body.appendChild(div);
    div.addEventListener('animationend', function(){div.parentElement.removeChild(div);}.bind(this));
}
function NewCursor() {
    var index = 0;
    var letters = ["❤️", "🧡", "💛", "💚", "💙", "💜"];
    var width = window.innerWidth;
    var cursor = {x: width/2, y: width/2};
    var particles = [];
    function init() {
      bindEvents();
      loop();
    }
    function bindEvents() {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchstart', onTouchMove);
      window.addEventListener('resize', onWindowResize);
    }
    function onWindowResize(e) {width = window.innerWidth;}
    function onTouchMove(e) {
      if( e.touches.length > 0 ) {
        for( var i = 0; i < e.touches.length; i++ ) {addParticle( e.touches[i].clientX, e.touches[i].clientY, letters[index++ % letters.length]);   }
      }
    }
    function onMouseMove(e) {    
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      addParticle( cursor.x, cursor.y + ((window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.    parentNode || document.body).scrollTop), letters[index++ % letters.length]);
    }
    function addParticle(x, y, character) {
      var particle = new Particle();
      particle.init(x, y, character);
      particles.push(particle);
    }
    function updateParticles() {
      for( var i = 0; i < particles.length; i++ ) {
        particles[i].update();
      }
      for( var i = particles.length -1; i >= 0; i-- ) {
        if( particles[i].lifeSpan < 0 ) {
          particles[i].die();
          particles.splice(i, 1);
        }
      }
    }
    function loop() {
      requestAnimationFrame(loop);
      updateParticles();
    }
    function Particle() {
      this.lifeSpan = 150;
      this.initialStyles ={
        "position": "absolute",
        "display": "block",
        "pointerEvents": "none",
        "z-index": "10000000",
        "fontSize": "16px",
        "will-change": "transform"
      };
      this.init = function(x, y, character) {
        this.velocity = {
          x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          y: 1
        };
        this.position = {x: x - 10, y: y - 20};
        this.element = document.createElement('span');
        this.element.innerHTML = character;
        applyProperties(this.element, this.initialStyles);
        this.update();
        document.body.insertBefore(this.element, document.body.firstChild);
      };
      this.update = function() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;
        this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
      }
      this.die = function() {
        this.element.parentNode.removeChild(this.element);
      }
    }
    function applyProperties( target, properties ) {
      for( var key in properties ) {
        target.style[ key ] = properties[ key ];
      }
    }
    init();
}
export default NewCursor;
export {clickEffect};