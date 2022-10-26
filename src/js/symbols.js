window.addEventListener('load', function () {
	if (!navigator.userAgentData.mobile) {
		document.querySelectorAll(".cta-btn--hero").forEach(element => {
			element.innerHTML += element.text == "Install" ? " &#11123;" : " &#127760;";
		});
	}
});