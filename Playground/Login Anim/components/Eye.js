export default class Eye extends HTMLElement {
    
    // define attributes that trigger change
    static get observedAttributes() {
        return ["color"];
    }
    
    // execute on first use in HTML
    connectedCallback() {

        this.render();

        this.addEventListener("click", () => this.hideDiv());      
    }

    // Handle observedAttribute Change
    attributeChangedCallback() {
        this.render()
    }

    render(color = this.getAttribute("color") || "black") {
        this.innerHTML = `<svg
   width="107.11768"
   height="60.651733"
   viewBox="0 0 107.11768 60.651733"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"  
   >
   <style>
      .div {
         transition: opacity .2s;
      }
      .hide{
         opacity: 0;
      }
   </style>
  <g
     id="g8"
     onclick=""
     transform="translate(-716.32332,-225.64456)">
    <ellipse
       style="fill:none;stroke:${color};stroke-width:3;stroke-miterlimit:3.5"
       id="path1"
       cx="768.86609"
       cy="255.05391"
       rx="16.947311"
       ry="16.742865" />
    <path
       id="path1-8"
       style="fill:none;stroke:${color};stroke-width:3;stroke-miterlimit:3.5"
       d="m 769.26086,231.48508 a 44.844046,23.978571 0 0 0 -44.84066,23.97879 44.844046,23.978571 0 0 0 44.84066,23.97879 44.844046,23.978571 0 0 0 44.84439,-23.97879 44.844046,23.978571 0 0 0 -44.84439,-23.97879 z" />
  </g>
  <path
     style="fill:none;stroke:${color};stroke-width:3;stroke-miterlimit:3.5"
     d="M 0.70025397,56.571527 105.34709,1.3264967"
     class="div" />
  <path
     style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:3;stroke-miterlimit:3.5;"
     d="M 1.770564,59.325247 106.4174,4.0802167"
     class="div" />
</svg>`

    }

    hideDiv() {
        this.children[0].querySelectorAll(".div").forEach(div => div.classList.toggle("hide"))
      }
}
