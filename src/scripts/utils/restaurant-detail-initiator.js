const RestaurantDetailInitiator = {
  async init({ restaurantDetailContainer, restaurant }) {
    this._restaurantDetailContainer = restaurantDetailContainer;
    this._restaurant = restaurant;

    this._renderRestaurantDetail();
  },

  _renderRestaurantDetail() {
    const restaurantDetailElement = document.createElement('restaurant-detail');
    restaurantDetailElement.restaurant = this._restaurant;
    this._restaurantDetailContainer.appendChild(restaurantDetailElement);

    this.onMenuChange({ type: 'foods' });
    this._renderMenusContent();
  },

  _renderMenusContent() {
    const menuBtns = document.querySelectorAll('.menu-btn');
    menuBtns.forEach(menuBtn => {
      menuBtn.addEventListener('click', event => {
        const { value } = event.target;
        this.onMenuChange({ type: value });
        this.menuBtns({ menuBtns, event });
      });
    });
  },

  onMenuChange({ type }) {
    const menuContent = document.createElement('menu-content');
    const menuContentParent = document.querySelector('.menu-content');
    const content = this._restaurant.restaurant.menus[type];

    menuContent.menuContent = content;
    menuContentParent.innerHTML = '';
    menuContentParent.appendChild(menuContent);
  },

  menuBtns({ menuBtns, event }) {
    menuBtns.forEach(menuBtn => {
      const { value } = menuBtn;
      if (value === event.target.value) {
        menuBtn.setAttribute('data-active', 'true');
      } else {
        menuBtn.setAttribute('data-active', 'false');
      }
    });
  },

};

export default RestaurantDetailInitiator;
