import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant.restaurant;
    this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    this._favoriteButtonContainer.innerHTML = '';
    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderFavorite() {
    const favoriteButtonElement = document.createElement('favorite-button');
    favoriteButtonElement.favorite = false;
    this._favoriteButtonContainer.appendChild(favoriteButtonElement);

    favoriteButtonElement.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderFavorited() {
    const favoriteButtonElement = document.createElement('favorite-button');
    favoriteButtonElement.favorite = true;
    this._favoriteButtonContainer.appendChild(favoriteButtonElement);
    console.log(favoriteButtonElement);

    favoriteButtonElement.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

};

export default FavoriteButtonInitiator;
