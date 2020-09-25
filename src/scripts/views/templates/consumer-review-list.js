class ConsumerReviewList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review-header">
        <h3>Consumer Reviews</h3>
      </div>
      <div class="wrapper">
      </div>
    `;
  }
}

customElements.define('consumer-review-list', ConsumerReviewList);

export default ConsumerReviewList;
