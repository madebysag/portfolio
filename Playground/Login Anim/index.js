import Eye from "./components/Eye.js"

customElements.define("eye-icon", Eye)

const inputs = [...document.querySelectorAll("input")]
const labels = [...document.querySelectorAll("input + label")]
const eyeIcons = [...document.querySelectorAll("eye-icon")]

const links = [...document.querySelectorAll("p.question a")]
const loginForm = document.querySelector("div.login")
const registerForm = document.querySelector("div.register")

inputs.forEach(input => {
    input.addEventListener("change", e => {
        if (e.target.value != "") 
            e.target.nextElementSibling.style = "transform: translate(-15px, -20px) scale(0.8);"
        else
            e.target.nextElementSibling.style = "transform: translate(0, 0) scale(1);"
        
    })


})

eyeIcons.forEach(icon => {
    icon.addEventListener("click", e => {
        const field = e.currentTarget.nextElementSibling
        if (field.type == "password") 
            field.type = "text"
        else
            field.type = "password"
    })
})

links.forEach(link => {
    link.addEventListener("click", (e) => {

        if(e.target.getAttribute("href") == "#Register") {


            loginForm.style.display = "none"
            loginForm.style.opacity = 0
            registerForm.style.display = "flex"

            registerForm.animate(
                [
                    {opacity: 0},
                    {opacity: 1}
                ], 
                {
                    duration: 200,
                    fill: "forwards",
                    easing: "ease-in"
            })

        } else {

            registerForm.style.display = "none"
            registerForm.style.opacity = 0
            loginForm.style.display = "flex"

            loginForm.animate(
                [
                    {opacity: 0},
                    {opacity: 1}
                ], 
                {
                    duration: 200,
                    fill: "forwards",
                    easing: "ease-in"
            })
        }
        
        e.preventDefault()
    })
})

