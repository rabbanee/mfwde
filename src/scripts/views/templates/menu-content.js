class MenuContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set menuContent(menuContent) {
    this._menuContent = menuContent;
    this.render();
  }

  renderMenuContent() {
    let list = '';
    this._menuContent.forEach(e => {
      list += `<li>${e.name}.</li>`;
    });

    return `<ol tabindex="0">${list}</ol>`;
  }

  render() {
    this.innerHTML = `
      ${this.renderMenuContent()}
  `;
  }
}

customElements.define('menu-content', MenuContent);

export default MenuContent;
