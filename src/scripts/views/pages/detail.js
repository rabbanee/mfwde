import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import RestaurantAppsSource from '../../data/restaurantapps-source';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import RestaurantDetailInitiator from '../../utils/restaurant-detail-initiator';
// eslint-disable-next-line import/no-cycle
import ConsumerReviewHelper from '../../utils/consumer-review-helper';

const detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAppsSource.detailRestaurant(url.id);
    if (localStorage.getItem('sent') === 'true') {
      Swal.fire({
        title: 'Success',
        html: '<p aria-label="Your review has been saved">Your review has been saved</p>',
        icon: 'success',
        confirmButtonAriaLabel: 'Ok',
      });
      localStorage.setItem('sent', false);
    }

    RestaurantDetailInitiator.init({
      restaurantDetailContainer: document.querySelector('#restaurant'),
      restaurant,
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });

    ConsumerReviewHelper.init({
      restaurant,
    });
  },
};

export default detail;
