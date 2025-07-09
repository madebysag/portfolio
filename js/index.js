import ThemeSwitcher from "./ThemeSwitcher.js"

const body = document.querySelector("body")
const nav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")
const hamburgerList = [...document.querySelectorAll("nav ul li a")]

const themeSwitcher = new ThemeSwitcher(document.querySelector(".theme-switcher"), body)

const coolBg = document.querySelector(".cool-bg")

const gradientSections = document.querySelectorAll("[data-gradient]")

const serviceList = document.querySelectorAll(".services-list li")

// Gradient section observer
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {

		const gradientValue = entry.target.dataset.gradient

		if (entry.isIntersecting) {
			changeBg(gradientValue, 0, 400) 
			coolBg.style.zIndex = -10

		} else {
			changeBg(0, gradientValue, 400);
		}

	})
},
{
	threshold: 0.1,
})


// Services List Observer
const servicesObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("current")
		} else {
			entry.target.classList.remove("current")
		}

	})
},
{
	threshold: 0.4,
	rootMargin: "-25% 0% 0% -25%"
})


// Bind action to load
window.addEventListener("DOMContentLoaded", () => {

	// Mobile Menu
	hamburger.addEventListener("click", (e) => {
		nav.classList.toggle("mobile")
		hamburger.classList.toggle("active")

		hamburgerList.forEach((li, index) => {
			li.style.animationDelay = `${index * 0.1}s`
		})

	})

	// Call the Gradient Observer
	gradientSections.forEach(section => {
		observer.observe(section)
	})
	// Call the Gradient Observer
	serviceList.forEach(list => {
		servicesObserver.observe(list)
	})
})



// Utils Functions
function changeBg(initialValue, endValue, duration){
	let start = performance.now()
	let newValue, animID

	const loop = () => {
		const elapsed = performance.now() - start	// elapsed is alias for delta
		const t = elapsed / duration	// t = period, linear interpolatio shii

		if(elapsed < duration) {
			newValue = lerp(t, initialValue, endValue)

			animID = requestAnimationFrame(loop)

			coolBg.style.backgroundImage = `radial-gradient( transparent ${newValue - 10}%, var(--bg-color) ${newValue + 50}%, var(--accent-color) ${newValue + 200}%)`;

		}else {
			cancelAnimationFrame(animID)
			animID = null;
			newValue = endValue
			coolBg.style.backgroundImage = `radial-gradient( transparent ${newValue - 10}%, var(--bg-color) ${newValue + 50}%, var(--accent-color) ${newValue + 200}%)`;
		}
	}

	loop()

}

function lerp(norm, min, max) {
	return min * ( 1 - norm) + max * norm;
}
