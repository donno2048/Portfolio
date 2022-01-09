import * as THREE from 'three';
const scene = new THREE.Scene();
const black = new THREE.Color(0x000000);
function animation() {
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.position.z = 10;
    renderer.render( scene, camera );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cubes = [];
    window.addEventListener("resize", function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    });
    for (let i = 0; i < 100 * Math.random() + 10; i++) {
        cubes.push(new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( { color: 0xffffff * Math.random() } )));
        cubes[i].position.x = Math.random() * 20 - 10;
        cubes[i].position.y = Math.random() * 20 - 10;
        cubes[i].position.z = Math.random() * 10 - 5;
        scene.add(cubes[i]);
    }
    const animate = () => {
      requestAnimationFrame( animate );
      cubes.forEach(cube => {
        cube.rotation.x += 0.05 * Math.random();
        cube.rotation.y += 0.05 * Math.random();
      });
      renderer.render( scene, camera );
    };
    animate();
}
export default animation;
export { scene, black };
