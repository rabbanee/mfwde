import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import SearchHelper from '../../utils/search-helper';

const favorite = {
  async render() {
    return `
      <restaurant-list></restaurant-list>
    `;
  },
  async afterRender() {
    document.querySelector('restaurant-list').title = 'Your Favorited';
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    SearchHelper.init(restaurants);
  },
};

export default favorite;
