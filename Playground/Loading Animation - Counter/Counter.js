export default class Counter {
    constructor(element) {
        this.element = element
        this.numbers = this.element.innerText.split("")
        this.height = this.element.clientHeight
        this.length = this.numbers.length
        this.numberHeight = this.element.clientHeight / this.length

        console.log(this.numberHeight);
    }

    goto(value){
        this.element.style.transform = `translateY(${(- this.height + this.numberHeight) * value}px`
    }
}