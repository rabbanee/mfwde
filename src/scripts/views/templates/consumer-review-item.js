class ConsumerReviewItem extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setAttribute('tabindex', '0');
  }

  set consumerReviewItem(consumerReviewItem) {
    this._consumerReviewItem = consumerReviewItem;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wrapper-name-date">
        <p class="consumer-name">${this._consumerReviewItem.name}</p>
        <p class="consumer-date">${this._consumerReviewItem.date}</p>
      </div>
      <p class="consumer-review">${this._consumerReviewItem.review}</p>
  `;
  }
}

customElements.define('consumer-review-item', ConsumerReviewItem);

export default ConsumerReviewItem;
