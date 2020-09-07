class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  set error(error) {
    this._error = error;
    this.renderError();
  }

  renderError() {
    this.innerHTML = `
     <div class="empty">
     <img src="/images/no-data.png" alt="blank data image" class="blank-image" tabindex="0">
      <h3 tabindex="0" aria-label="Data is Not found">Data is Not found</h3>
     </div>
      
    `;
  }

  render() {
    this.innerHTML = `
      <article class="restaurant-item" id="${this._restaurant.id}">
        <div class="wrapper-img">
          <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name}'s image" tabindex="0">
          <p class="city" aria-label="City:  ${this._restaurant.city}" tabindex="0">Kota: ${this._restaurant.city}</p>
        </div>
        <div class="restaurant-item-content">
          <div id="rating" aria-label="Rating: ${this._restaurant.rating}" tabindex="0">
            <span class="text">Rating: ${this._restaurant.rating}</span>
            <div class="star" style="--rating: ${this._restaurant.rating};" id="star" data-rating="${this._restaurant.rating}">★★★★★</div>
          </div>
          <h3 aria-label="Restaurant Name: ${this._restaurant.name}" tabindex="0">${this._restaurant.name}</h3>
          <p class="description" aria-label="Description: ${this._restaurant.description}" tabindex="0">${this._restaurant.description}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);