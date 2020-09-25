import stringSimilarity from 'string-similarity';

const SearchHelper = {
  init(restaurants) {
    this._restaurants = restaurants;
    this.renderResult(this._restaurants);
  },

  renderError(error, container) {
    const restaurantItemElement = document.createElement('restaurant-item');
    restaurantItemElement.error = error;
    container.appendChild(restaurantItemElement);
  },

  async renderResult(restaurants) {
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
    this.renderResultBySearch(this._restaurants);
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

export default SearchHelper;
