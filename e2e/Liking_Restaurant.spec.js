// const assert = require('assert');

// Feature('Liking Restaurant');

// Before(({ I }) => {
//   I.amOnPage('/#/favorite');
// });

// Scenario('showing empty liked restaurant', ({ I }) => {
//   I.seeElement('#search-input');
//   I.see('Data is Not found', '.empty');
// });

// Scenario('liking one restaurant', async ({ I }) => {
//   I.see('Data is Not found', '.empty');

//   I.amOnPage('/');

//   I.seeElement('.restaurant-item h3 a');

//   const firstRestaurant = locate('.restaurant-item h3 a').first();
//   const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
//   I.click(firstRestaurant);

//   I.wait(1);
//   I.seeElement('#likeButton');
//   I.click('#likeButton');
//   I.wait(1);
  
//   I.amOnPage('/#/favorite');
//   I.wait(1);
//   I.seeElement('.restaurant-item');
//   const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item h3 a');

//   assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
// });

// Scenario('unliking one restaurant', ({ I }) => {
//   I.see('Data is Not found', '.empty');

//   I.amOnPage('/');

//   I.seeElement('.restaurant-item h3 a');

//   I.click(locate('.restaurant-item h3 a').first());

//   I.wait(1);
//   I.seeElement('#likeButton');
//   I.click('#likeButton');
//   I.wait(1);

//   I.amOnPage('/#/favorite');
//   I.wait(1);
//   I.seeElement('.restaurant-item');
  
//   I.click(locate('.restaurant-item h3 a').first());

//   I.wait(1);
//   I.seeElement('#likeButton');
//   I.click('#likeButton');
//   I.wait(1);

//   I.amOnPage('/#/favorite');
//   I.see('Data is Not found', '.empty');
// });