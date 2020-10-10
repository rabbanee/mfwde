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
          <i class="fa${this._favorite ? 's' : 'r'} fa-heart" aria-hidden="true"></i>
        </button>
    `;
  }
}

customElements.define('favorite-button', FavoriteButton);
