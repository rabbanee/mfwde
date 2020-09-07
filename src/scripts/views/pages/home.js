import stringSimilarity from 'string-similarity';
import Data from '../../data/DATA.json';
import RestaurantAppsSource from '../../data/restaurantapps-source';

const home = {
  async render(content) {
    // eslint-disable-next-line no-param-reassign
    content.innerHTML = `
      <section class="restaurant-list">
        <div class="wrapper-search">
          <h2 tabindex="0" aria-label="Explore Restaurant">Explore Restaurant</h2>
          <div class="wrapper-input">
            <input type="text" name="search" id="search-input" placeholder="Search Restaurant by Name or City">
            <button type="button" class="search-button">Search</button>
          </div>
        </div>
        <div class="wrapper">

        </div>
      </section>
    `;
    this.afterRender();
  },

  async afterRender() {
    const restaurants = await RestaurantAppsSource.listRestaurant().restaurants;
    console.log(restaurants);
    this.renderResult(restaurants);
    this.renderResultBySearch(restaurants);
  },

  renderResult(restaurants) {
    const rList = document.querySelector('.restaurant-list .wrapper');
    rList.innerHTML = '';
    if (restaurants === undefined || restaurants.length === 0) {
      this.renderError('kosong', rList);
    } else {
      restaurants.forEach(restaurant => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        rList.appendChild(restaurantItemElement);
      });
    }
  },

  renderError(error, container) {
    const restaurantItemElement = document.createElement('restaurant-item');
    restaurantItemElement.error = error;
    container.appendChild(restaurantItemElement);
  },

  renderResultBySearch(restaurants) {
    // Search
    const searchBtn = document.querySelector('.search-button');
    const searchInput = document.querySelector('#search-input');

    const unique = array => array.filter((value, index, self) => self.indexOf(value) === index);

    searchBtn.addEventListener('click', () => {
      const search = searchInput.value.trim();
      if (search.length === 0 || !search) {
        this.renderResult(restaurants);
        return;
      }
      let resultByName = 0;
      let resultByCity = 0;
      const list = [];
      restaurants.forEach(value => {
        resultByName = stringSimilarity
          .compareTwoStrings(value.name.toUpperCase(), search.toUpperCase());
        resultByCity = stringSimilarity
          .compareTwoStrings(value.city.toUpperCase(), search.toUpperCase());

        if (resultByName >= 0.4) {
          list.push(value.id);
        }

        if (resultByCity >= 0.4) {
          list.push(value.id);
        }
      });
      this.dataBySearch(unique(list), restaurants);
    });
  },

  dataBySearch(id, restaurants) {
    const result = [];
    id.map(value => restaurants.find(row => (row.id.toString() === value.toString() ? result.push(row) : '')));
    this.renderResult(result);
  },

};
export default home;