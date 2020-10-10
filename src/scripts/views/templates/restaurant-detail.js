const { default: CONFIG } = require('../../globals/config');
import '@fortawesome/fontawesome-free/js/all';

class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant.restaurant;
    this._menus = restaurant.restaurant.menus;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  categories(categories) {
    let category = '';
    // console.log(categories);
    categories.forEach((e, i) => {
      category += categories.length !== i + 1 ? `${e.name}, ` : ` ${e.name}`;
    });
    return `<p tabindex="0" aria-label="category restaurant: ${category}">${category}</p>`;
  }

  render() {
    this.innerHTML = `
    <div class="wrapper-img">
      <img crossorigin='anonymous' src="${CONFIG.BASE_URL_IMAGE}medium/${this._restaurant.pictureId}" alt="">
    </div>
    <div class="wrapper-content">
      <h2 tabindex="0">${this._restaurant.name}</h2>
      <p class="address" tabindex="0">${this._restaurant.city} • ${this._restaurant.address}</p>
      <div class="wrapper-rating-categories">
        <div class="rating" aria-label="Rating: ${this._restaurant.rating}" tabindex="0">
          <div class="star" style="--rating: ${this._restaurant.rating};" id="star" data-rating="${this._restaurant.rating}">★★★★★</div>
          <span class="text">${this._restaurant.rating}</span>
        </div>
        <div class="categories">
          <img src="/images/icon-category.png" srcset="./images/icon-category-small.png 480w, ./images/icon-category-large.png 800w"
           sizes="(max-width: 600px) 480px, 800px" class="category-icon">
          ${this.categories(this._restaurant.categories)}
        </div>
      </div>
      <p tabindex="0">${this._restaurant.description}</p>
    </div>
    <div class="menus">
        <h3 tabindex="0">Menus</h3>
        <div class="menu-buttons">
          <button data-active='true' aria-label="Menu: Foods" class="menu-btn" value="foods">Foods</button>
          <button data-active='false' aria-label="Menu: Drinks" class="menu-btn" value="drinks">Drinks</button>
        </div>
        <div class="menu-content" tabindex="0" aria-label="Menu Content">
          
        </div>
      </div>
    <consumer-review-list tabindex="0" aria-label="Consumer Reviews"></consumer-review-list>
    <add-review></add-review>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
