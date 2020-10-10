Feature('Writing Consumer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing consumer review list', ({ I }) => {
  I.click(locate('.restaurant-item h3 a').first());
  I.wait(1)
  I.seeElement('consumer-review-list');
});

Scenario('writing a review', ({ I }) => {
  I.click(locate('.restaurant-item h3 a').first());
  I.wait(1)

  I.seeElement('consumer-review-list');
  
  I.seeElement('#name');
  I.seeElement('#review');

  I.fillField('#name', 'Testing');
  I.fillField('#review', 'Testing Review');

  I.seeElement('.add-review-button');
  I.click(locate('.add-review-button').first());
  I.wait(2);

  I.seeElement('.swal2-confirm.swal2-styled');
  I.click(locate('.swal2-confirm.swal2-styled').first());
});