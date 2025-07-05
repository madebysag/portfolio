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

// const coolBg = document.querySelector(".cool-bg")
const coolBg = document.querySelector(".cool-bg")

// const coolBgAnim = coolBg.animate([
// 	//Keyframes
// 	// {backgroundImage: `radial-gradient( transparent 0%, var(--bg-color) 50%, var(--accent-color) 200%)`}
// 	{offset: 0.1}
// ],
// {
// 	duration: 2000,
// 	fill: "forwards",
// 	easing: "ease-in"

// })

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {

		const gradientValue = entry.target.dataset.gradient

		if (entry.isIngtersecting) changeBg(0, gradientValue, 200);
		else changeBg(gradientValue, 0, 200);
	})
},
{
	threshold: 0.5
})


const gradientSections = document.querySelectorAll("[data-gradient]")

gradientSections.forEach(section => {
	observer.observe(section)
})

console.log(gradientSections)







const changeBg = (initialValue, endValue, duration) => {
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

// function lerp(norm, min, max) {
// 	return (max - min) * norm + min;
// }