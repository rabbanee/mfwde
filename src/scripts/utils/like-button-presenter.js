const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    this._likeButtonContainer.innerHTML = '';
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeButtonTemplate = document.createElement('favorite-button');
    likeButtonTemplate.favorite = false;
    this._likeButtonContainer.appendChild(likeButtonTemplate);

    const likeButtonElement = document.querySelector('#likeButton');
    likeButtonElement.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    const likeButtonTemplate = document.createElement('favorite-button');
    likeButtonTemplate.favorite = true;
    this._likeButtonContainer.appendChild(likeButtonTemplate);

    const likeButtonElement = document.querySelector('#likeButton');
    likeButtonElement.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

};

export default LikeButtonPresenter;
