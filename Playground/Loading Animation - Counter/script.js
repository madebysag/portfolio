import Counter from "./Counter.js"
const spaces = {
    hundredth: document.getElementById("hundredth"),
    tens: document.getElementById("tens"),
    unit: document.getElementById("unit")
}
const progress = document.getElementById("progress")

// Counters
const unitCounter = new Counter(spaces.unit)
const tensCounter = new Counter(spaces.tens)
const hundredthCounter = new Counter(spaces.hundredth)

progress.addEventListener("input", e => {
    unitCounter.goto(e.target.value);
    tensCounter.goto(e.target.value);
    hundredthCounter.goto(e.target.value);
})


function clamp(min, max, factor) {
	return Math.min(max, Math.max(min, factor))
}
