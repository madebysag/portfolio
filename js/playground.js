import ThemeSwitcher from "./ThemeSwitcher.js"


const body = document.querySelector("body")
const modalBtn = document.querySelector("button.side-modal")
const modal = document.querySelector("aside")
// const themeSwitcher = document.querySelector(".theme-switcher")
const links = [...document.querySelectorAll("aside > nav > ul > li a")]



const themeSwitcher = new ThemeSwitcher(document.querySelector(".theme-switcher"), body)

modalBtn.addEventListener("click", (e) => {
	modal.classList.toggle("open")


	// hamburger.classList.toggle("active")

	// hamburgerList.forEach((li, index) => {
	// 	li.style.animationDelay = `${index * 0.1}s`
	// })

})

// themeSwitcher.addEventListener("click", (e) => {
// 	body.classList.toggle("dark-theme")
// 	themeSwitcher.innerText == "Light theme" ? themeSwitcher.innerText = "Dark theme" : themeSwitcher.innerText = "Light theme"
// })