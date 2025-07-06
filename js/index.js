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

		// if (entry.isIntersecting) tweenBg("reverse");
		// else tweenBg()


		if (entry.isIntersecting) (changeBg(gradientValue, 0, 400), coolBg.style.zIndex = -10)
		else changeBg(0, gradientValue, 400);

	})
},
{
	threshold: 0.1
})


const gradientSections = document.querySelectorAll("[data-gradient]")

gradientSections.forEach(section => {
	observer.observe(section)
})






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

			console.log("iffffffff")

		}else {
			cancelAnimationFrame(animID)
			animID = null;
			newValue = endValue
			coolBg.style.backgroundImage = `radial-gradient( transparent ${newValue - 10}%, var(--bg-color) ${newValue + 50}%, var(--accent-color) ${newValue + 200}%)`;
			console.log("elseeeeeee")
		}
	}

	loop()

}


function lerp(norm, min, max) {
	return min * ( 1 - norm) + max * norm;
}


function tweenBg(direction) {
	let start, target;

	if (direction == "reverse") {
		start = 200; target = 0;
	} else {
		start = 0; target = 200;
	}

	const duration = 200,
		change = target - start,
		startTime = new Date();

	function update() {
		let time = new Date() - startTime;

		if(time < duration) {
			const newValue = linearTween(time, start, change, duration)
			coolBg.style.backgroundImage = `radial-gradient( transparent ${newValue - 10}%, var(--bg-color) ${newValue + 50}%, var(--accent-color) ${newValue + 200}%)`;

			requestAnimationFrame(update)
		} else {
			time = duration;

			const newValue = linearTween(time, start, change, duration)
			coolBg.style.backgroundImage = `radial-gradient( transparent ${newValue - 10}%, var(--bg-color) ${newValue + 50}%, var(--accent-color) ${newValue + 200}%)`;

		}
	}

	update()


}

// simple linear tweening - no easing
// t: current time, b: beginning value, c: change in value, d: duration
function linearTween(t, b, c, d) {
	return c * t / d + b;
}

