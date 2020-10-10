class PreLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <video autoplay loop muted playsinline>
      <source src="./videos/ripple.webm" type="video/webm">
      <source src="./videos/ripple.mp4" type="video/mp4">
    </video>
    `;
  }
}

customElements.define('pre-loader', PreLoader);

export default PreLoader;
