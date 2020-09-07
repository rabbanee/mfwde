import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAppsSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantAppsSource;