const hamburgerMenu = document.querySelector("#Menu");
const navbarMenu = document.querySelector("#navbar-menu");

document.addEventListener("click", (e) => {
	if (!navbarMenu?.contains(e.target) && !hamburgerMenu?.contains(e.target)) {
		navbarMenu?.classList.remove("active");
	}
});

document.addEventListener("scroll", function (e) {
	const navbar = document.querySelector("nav");
	if (window.scrollY !== 0) {
		navbar.classList.add("active");
	} else {
		navbar.classList.remove("active");
	}
});
