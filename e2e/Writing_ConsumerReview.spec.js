const assert = require('assert');

Feature('Writing Consumer Review');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(1);
});

Scenario('showing consumer review list', ({ I }) => {
  I.click(locate('.restaurant-item h3 a').first());
  I.wait(1);
  I.seeElement('consumer-review-list');
});

Scenario('writing a review', async ({ I }) => {
  I.click(locate('.restaurant-item h3 a').first());
  I.wait(1);

  I.seeElement('consumer-review-list');

  I.seeElement('#name');
  I.seeElement('#review');

  const review = 'Testing Review';
  I.fillField('#name', 'Testing');
  I.fillField('#review', review);

  I.seeElement('.add-review-button');
  I.click(locate('.add-review-button').first());
  I.wait(2);

  I.seeElement('.swal2-confirm.swal2-styled');
  I.click(locate('.swal2-confirm.swal2-styled').first());
  I.seeElement('.consumer-review');
  const lastReviewElement = locate('.consumer-review').last();
  const lastReview = await I.grabTextFrom(lastReviewElement);

  assert.strictEqual(lastReview, review);
});
