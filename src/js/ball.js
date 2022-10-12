function ballAnimation() {
	const ball = document.getElementById('ball');
	ball.addEventListener('mousedown', function (e) {
		var y = e.clientY;
		ball.style.backgroundColor = 'blue';
		ball.style.color = 'transparent';
		ball.style.userSelect = 'none';
		ball.style.left = e.clientX + 'px';
		ball.style.top = y + window.scrollY + 'px';
		ball.style.cursor = 'none';
		document.addEventListener('mousemove', function (e) {
			y = e.clientY;
			ball.style.left = e.clientX + 'px';
			ball.style.top = y + window.scrollY + 'px';
		});
		window.addEventListener("scroll", function () {
			ball.style.top = y + window.scrollY + 'px';
		});
	});
}
export default ballAnimation;