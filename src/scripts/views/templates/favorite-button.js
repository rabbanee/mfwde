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
        <button aria-label="${this._favorite ? 'unfavorite' : 'favorite'} this restaurant" id="favoriteButton" class="favorite">
          <i class="fa fa-heart${this._favorite ? '' : '-o'} " aria-hidden="true"></i>
        </button>
    `;
  }
}

customElements.define('favorite-button', FavoriteButton);
