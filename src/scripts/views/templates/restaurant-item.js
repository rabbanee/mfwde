import CONFIG from '../../globals/config';

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
      <style>
      restaurant-item {
        grid-column: 2 / 3;
      }
      </style>
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
          <img src="${CONFIG.BASE_URL_IMAGE}small/${this._restaurant.pictureId}" crossorigin='anonymous' alt="${this._restaurant.name}'s image" tabindex="0">
          <p class="city" aria-label="City:  ${this._restaurant.city}" tabindex="0">Kota: ${this._restaurant.city}</p>
        </div>
        <div class="restaurant-item-content">
          <div id="rating" aria-label="Rating: ${this._restaurant.rating}" tabindex="0">
            <span class="text">Rating: ${this._restaurant.rating}</span>
            <div class="star" style="--rating: ${this._restaurant.rating};" id="star" data-rating="${this._restaurant.rating}">★★★★★</div>
          </div>
          <h3 aria-label="Restaurant Name: ${this._restaurant.name}" tabindex="0"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
          <p class="description" aria-label="Description: ${this._restaurant.description}" tabindex="0">${this._restaurant.description}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
