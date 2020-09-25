import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAppsSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async addReviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': 12345,
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantAppsSource;
