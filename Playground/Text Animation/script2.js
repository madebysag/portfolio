/***
 * Learning Intersection Observer 
 * @Author is Abdulgafar Olowosibi
 */


const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        const content = [...entry.target.children[0].children[0].children]
        
        if (entry.isIntersecting) {
            content.forEach((letter, index) => {
                letter.style.transitionDelay = index * 80 + "ms"
                letter.classList.add("show")
            }) 

        } else {
            content.forEach((letter, index) => {
                letter.style.transitionDelay = index * 80 + "ms"
                letter.classList.remove("show")
            }) 
        }
    })
}, 
    {
        threshold: 0.5
    }
)

const sections = [...document.getElementsByTagName("section")]

sections.forEach(section => {
    const content = section.children[0].children[0].innerText.split("")

    section.children[0].children[0].innerHTML = content.reduce((previous, current) => {
        return previous += "<span>" + current + "</span>";
    },
    ""  //  Weirdly without this, it does not wrap the first letter in span, related to reduce() returning nothing in the first run
)
    observer.observe(section)
})



