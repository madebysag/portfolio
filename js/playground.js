import ThemeSwitcher from "./ThemeSwitcher.js"

const body = document.querySelector("body")
const modalBtn = document.querySelector("button.side-modal")
const modal = document.querySelector("aside")
const links = [...document.querySelectorAll("aside > nav > ul li a")]

const iframe = document.querySelector("iframe#main")
const briefContainer = document.querySelector("p#brief")
const titleContainer = document.querySelector("header#title")


const themeSwitcher = new ThemeSwitcher(document.querySelector(".theme-switcher"), body)

modalBtn.addEventListener("click", (e) => {
	modal.classList.toggle("open")
})

links.forEach(link => {
	link.addEventListener("click", e => {

		changeView(
			e.target.innerText,
			e.target.dataset.brief,
			e.target.getAttribute("href")
			)

		links.forEach( item => item.classList.remove("active"))
		e.target.classList.add("active")

		e.preventDefault()
	})
})

function changeView(title, brief, src) {
	iframe.src = src
	briefContainer.innerHTML = brief
	titleContainer.innerText = "Playground | " + title
}
