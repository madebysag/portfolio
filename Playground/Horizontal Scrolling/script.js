const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry);
            document.addEventListener("scroll", e => {
                // console.log("showww");
                
            })
        } else {
            document.removeEventListener("scroll", () => {
                console.log("remmoved");
                
            })
        }

    })
    
},
    {
        rootMargin: "-50%",
        // threshold: 0.9
    }
)

const horizontalWrapper = document.getElementById("wrapper")

observer.observe(horizontalWrapper)