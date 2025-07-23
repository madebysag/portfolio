export default class Accordion extends HTMLElement {
	constructor() {
		super()

		this.shadow = this.attachShadow({mode: "open"})

		const linkStyle = document.createElement("link")
		linkStyle.setAttribute("rel", "stylesheet")
		linkStyle.setAttribute("href", "./Accordion.css")

		const template = document.querySelector("#an-accordion")
		const content = template.content.cloneNode(true)

		this.shadow.appendChild(linkStyle)
		this.shadow.appendChild(content)

		console.log(this)
	}

	connectedCallback() {
	}
}

customElements.define("an-accordion", Accordion)