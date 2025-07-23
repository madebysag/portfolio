/***
 * Learning Intersection Observer 
 * @Author is Abdulgafar Olowosibi
 */

const wordObserver = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        const words = [...entry.target.children]
        
        if (entry.isIntersecting) {
            words.forEach((word, index) => {
                word.children[0].style.transitionDelay = index * 80 + "ms"
                word.children[0].classList.add("show")
            }) 

        } else {
            words.forEach((word, index) => {
                word.children[0].style.transitionDelay = index * 80 + "ms"
                word.children[0].classList.remove("show")
            }) 
        }
    })
}, 
    {
        rootMargin: "0% 0px -30% 0px"
    }
)

const wordSections = document.querySelectorAll(".animate-words")

wordSections.forEach(words => {

    // Choose where to break words
    const content = words.innerText.split(" ")

    words.innerHTML = content.reduce((previous, current) => {

        // remember &nbsp; when breaking not braking by letters 
        return previous += "<div class='mask'><span>" + current + "&nbsp;</span></div>";
    },
    ""  //  Weirdly without this, it does not wrap the first letter in span, related to reduce() returning nothing in the first run
)
    wordObserver.observe(words)
})
