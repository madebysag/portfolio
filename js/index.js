const body = document.querySelector("body")
const nav = document.querySelector("nav")
const themeSwitcher = document.querySelector(".theme-switcher")
const hamburger = document.querySelector(".hamburger")
const hamburgerList = [...document.querySelectorAll("nav ul li a")]


hamburger.addEventListener("click", (e) => {
	nav.classList.toggle("mobile")
	hamburger.classList.toggle("active")

	hamburgerList.forEach((li, index) => {
		li.style.animationDelay = `${index * 0.1}s`
	})

})

themeSwitcher.addEventListener("click", (e) => {
	body.classList.toggle("dark-theme")
	themeSwitcher.innerText == "Light theme" ? themeSwitcher.innerText = "Dark theme" : themeSwitcher.innerText = "Light theme"
})