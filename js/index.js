import ThemeSwitcher from "./ThemeSwitcher.js"

const body = document.querySelector("body")
const nav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")
const hamburgerList = [...document.querySelectorAll("nav ul li a")]

const themeSwitcher = new ThemeSwitcher(document.querySelector(".theme-switcher"), body)


hamburger.addEventListener("click", (e) => {
	nav.classList.toggle("mobile")
	hamburger.classList.toggle("active")

	hamburgerList.forEach((li, index) => {
		li.style.animationDelay = `${index * 0.1}s`
	})

})

