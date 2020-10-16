class FavoriteButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set favorite(favorite) {
    this._favorite = favorite;
    this.render();
  }

  render() {
    this.innerHTML = `
    <button aria-label="${this._favorite ? 'unlike' : 'like'} this restaurant" id="likeButton" class="favorite">
      <span class="icon-heart${this._favorite ? '' : '-o'}"></span>
    </button>
    `;
  }
}

customElements.define('favorite-button', FavoriteButton);
