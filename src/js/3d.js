import * as THREE from 'three';
const scene = new THREE.Scene();
function animation() {
	scene.background = new THREE.Color(0);
	const camera = new THREE.OrthographicCamera(-10, 10, -10, 10);
	const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.position.z = 10;
	renderer.render(scene, camera);
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const cubes = [];
	window.addEventListener("resize", function () {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});
	for (let i = 0; i < 100 * Math.random() + 10; i++) {
		cubes.push(new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() })));
		cubes[i].position.x = Math.random() * 20 - 10;
		cubes[i].position.y = Math.random() * 20 - 10;
		cubes[i].position.z = Math.random() * 10 - 5;
		scene.add(cubes[i]);
	}
	addEventListener("pointermove", (e) => {
		cubes.forEach((cube, index) => {
			if (cube && 2 * Math.abs(10 * (e.clientX / window.innerWidth * 2 - 1) - cube.position.x) < 1 && 2 * Math.abs(10 * (e.clientY / window.innerHeight * 2 - 1) - cube.position.y) < 1) cubes[index] = false;
		})
	});
	const animate = () => {
		requestAnimationFrame(animate);
		cubes.forEach(cube => {
			if (cube) { // pop-ing won't work as event listeners are asynchronous
				cube.rotation.x += 0.05 * Math.random();
				cube.rotation.y += 0.05 * Math.random();
			}
		});
		renderer.render(scene, camera);
	};
	animate();
}
export default animation;
export { scene, black };
