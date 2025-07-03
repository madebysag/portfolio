class ThemeSwiter{
	constructor(el, body) {
		this.el = el;
		this.body = body;
		this.status = "light"
		this.style = `
			.theme-switcher {
  background-color: var(--text-color);
  /*background-color: var(--bg-color);*/
  background-image: url("../static/images/theme icons.png");
  background-size: 200% 100%;
  background-position: -5% 0;
  /*background-position: 95% 0;*/
  height: 30px;
  width: 30px;
  display: inline-block;
  border-radius: 50%;
}`

		const sheet = window.document.styleSheets[0];

		sheet.insertRule(this.style)

		const bindedHandleClick = this.handleClick.bind(this)
		

		// Important Note - using this.handleClick here result in context issues
		this.el.addEventListener("click", bindedHandleClick)	// Did I just use the func.bind().... I am a senior dev now lmaoo
	}

	handleClick() {

		if (this.status == "light") {
			this.body.classList.add("dark-theme")
			this.status = "dark"

			this.el.style.backgroundPosition = "107% 0"
		} else {
			this.body.classList.remove("dark-theme")
			this.status = "light"

			this.el.style.backgroundPosition = "-5% 0"
		}
	}
}

export default ThemeSwiter;