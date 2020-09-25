class JumbotronImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <section class="hero" tabindex="0" aria-label="A Hero/Jumbotron Image">
            <h2 tabindex="0">Find a Restaurant easier!</h2>
      </section>
    `;
  }
}

customElements.define('jumbotron-image', JumbotronImage);
