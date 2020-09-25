class PreLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <img src="/images/spinner.svg" alt="">
    `;
  }
}

customElements.define('pre-loader', PreLoader);

export default PreLoader;
