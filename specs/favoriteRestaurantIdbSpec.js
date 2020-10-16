/* eslint-disable import/newline-after-import */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
const { default: FavoriteRestaurantIdb } = require('../src/scripts/data/favoriterestaurant-idb');

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async restaurant => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
