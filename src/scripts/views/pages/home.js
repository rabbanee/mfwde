import RestaurantAppsSource from '../../data/restaurantapps-source';
import SearchHelper from '../../utils/search-helper';

const Home = {
  async render() {
    return `
      <jumbotron-image></jumbotron-image>
      <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAppsSource.listRestaurant();
    SearchHelper.init(restaurants);
  },
};

export default Home;
