import Accordion from "./Accordion.js"


const accordionElements  = document.querySelectorAll(".accordion-container");

accordionElements.forEach(el => {
    const accordion  = new Accordion(el)
})
