class ProjectViewer {
	constructor(loader, viewer){
		this.loader = loader
		this.viewer = viewer
	}

	observe(element) {
		element.addEventListener("click", e => {

			if (e.currentTarget.dataset.src) {

				// Loader animation
				this.loader.style.display = "block"

				// Create the iFrame
				const iFrame = document.createElement("iFrame")
				iFrame.src = e.currentTarget.dataset.src

				// Show Viewer
				this.viewer.classList.add("active")

				iFrame.onload = () => {
					this.loader.style.display = "none"
				}

				this.viewer.appendChild(iFrame)

				// Close Button
				this.viewer.children[0].addEventListener("click", () => {
					this.close(iFrame)
				})

			} else if(e.currentTarget.dataset.link) {
				
				// Hide Loader
				this.loader.style.display = "none"

				// Show Viewer
				this.viewer.classList.add("active")
				
				const element = document.createElement("div")
				const description = e.currentTarget.dataset.desc
				const link = e.currentTarget.dataset.link
				element.classList.add("desc")
				element.innerHTML = `<p class="md" style="margin-bottom:1.5rem;">${description}</p>
				<a class="btn-lg" href="${link}">Visit Site</a>`
				
				// Add to viewer
				this.viewer.appendChild(element)
				
				// Close Button
				this.viewer.children[0].addEventListener("click", () => {
					this.close(element)
				})

			} else {
				console.log("wetin be this")
			}

		})
	}

	close(iFrameElement){
			iFrameElement.remove()
			this.viewer.classList.remove("active")
	}
}

export default ProjectViewer;