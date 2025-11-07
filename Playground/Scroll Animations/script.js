const body = document.getElementsByTagName("body")[0]
const divs = [...document.getElementsByClassName("card-face")]

// Scroll TimeLine - where we are currently: normalised
let scrollTimeline = (window.scrollY + window.innerHeight) / body.clientHeight

//	Update scrolltimeline on scroll
document.addEventListener("scroll", e => {

	// Update Scroll Timeline
	scrollTimeline = (window.scrollY + window.innerHeight) / body.clientHeight


	divs.forEach((div, index) => {

	// when each div shows on the timeline - only the top
		const timelineLowOffset = (div.offsetTop / body.clientHeight)

		// when each div shows on the timeline - completely
		const timelineOffset = (div.offsetTop / body.clientHeight) + (div.clientHeight / body.clientHeight)

		if (scrollTimeline >= timelineOffset) {

			// Amount of div that has scrolled pass - clamped
			const amountScrolled = clamp(1, div.clientHeight, window.scrollY - div.offsetTop)

			// angle for X rotation
			const angle =  mapRange(amountScrolled, 1, div.clientHeight, 1, 90)

			div.style.transform = `perspective(600px) rotateX(${angle}deg)`

		}	
	})
})

/**
 * Helper functions - Utils
*/

function clamp(min, max, factor) {
	return Math.min(max, Math.max(min, factor))
}

function mapRange(number, inMin, inMax, outMin, outMax) {
	return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
