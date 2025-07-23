import Counter from "./Counter.js"
const spaces = {
    hundredth: document.getElementById("hundredth"),
    tens: document.getElementById("tens"),
    unit: document.getElementById("unit")
}
const progress = document.getElementById("progress")
const play = document.getElementById("play")

// Counters
const unitCounter = new Counter(spaces.unit)
const tensCounter = new Counter(spaces.tens)
const hundredthCounter = new Counter(spaces.hundredth)

progress.addEventListener("input", e => {
    unitCounter.goto(e.target.value);
    tensCounter.goto(e.target.value);
    hundredthCounter.goto(e.target.value);
})

const count = (secs) => {
    let id;
    
    let percent = 0

    id = setInterval(()=> {
        percent += secs / 10000;

        if (percent < secs / 1000) {
            hundredthCounter.goto(percent);
            unitCounter.goto(percent);
            tensCounter.goto(percent);

        }else {

            clearInterval(id)
        }
    }, 100)
     

}

play.addEventListener("click", () => {
    count(1000)
})