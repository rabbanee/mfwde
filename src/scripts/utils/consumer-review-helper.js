import Swal from 'sweetalert2';
import RestaurantAppsSource from '../data/restaurantapps-source';

const ConsumerReviewHelper = {
  init({ restaurant }) {
    this._restaurant = restaurant.restaurant;
    this._consumerReviews();
  },

  _consumerReviews() {
    const { consumerReviews } = this._restaurant;
    const consumerReviewList = document.querySelector('consumer-review-list .wrapper');

    consumerReviews.forEach(consumerReview => {
      const consumerReviewItemElement = document.createElement('consumer-review-item');
      consumerReviewItemElement.consumerReviewItem = consumerReview;
      consumerReviewList.appendChild(consumerReviewItemElement);
    });
    this._addReview();
  },

  async _addReview() {
    const addReviewButton = document.querySelector('.add-review-button');
    const textAreaReview = document.querySelector('restaurant-detail textarea[name="review"]');
    const inputName = document.querySelector('restaurant-detail input[name="name"]');
    addReviewButton.addEventListener('click', async () => {
      if (inputName.value.trim() === '' || textAreaReview.value.trim() === '') {
        Swal.fire({
          title: 'Error',
          text: 'Please fill the input!',
          icon: 'error',
          confirmButtonAriaLabel: 'Ok',
        });
      } else {
        await RestaurantAppsSource.addReviewRestaurant({
          id: this._restaurant.id,
          name: inputName.value.trim(),
          review: textAreaReview.value.trim(),
        });
        localStorage.setItem('sent', true);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    });
  },
};

export default ConsumerReviewHelper;
