

const body = document.getElementsByTagName("body")[0]
const sections = [...document.getElementsByTagName("section")]

// Scroll TimeLine - where we are currently: normalised
let scrollTimeline = (window.scrollY + window.innerHeight) / body.clientHeight


//	Update scrolltimeline on scroll
document.addEventListener("scroll", e => {
    
    console.time()
	// Update Scroll Timeline
	scrollTimeline = (window.scrollY + window.innerHeight) / body.clientHeight
    

	sections.forEach((section, index) => {

	// when each section shows on the timeline - only the top
		const timelineLowOffset = (section.offsetTop / body.clientHeight)

		// when each section shows on the timeline - completely
		const timelineOffset = (section.offsetTop / body.clientHeight) + (section.clientHeight / body.clientHeight)

		if (scrollTimeline >= timelineOffset) {

            // Add show class to h1
            section.children[0].children[0].classList.add("show")
            
		} else {
            console.log("other consition");
            section.children[0].children[0].classList.remove("show")
            
        }

	})
    console.timeEnd()
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
