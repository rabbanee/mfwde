class SkeletonRestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="restaurant-item">
        <div class="wrapper-img">
          <img src="./images/placeholder-large.png" srcset="./images/placeholder-small.png 480w, ./images/placeholder-large.png 800w"
           sizes="(max-width: 600px) 480px, 800px"  alt="Skeleton image" tabindex="0">
        </div>
        <div class="restaurant-item-content">
          <h3><a href="#">Lorem ipsum dolor sit.</a></h3>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </article>
    `;
  }
}

customElements.define('skeleton-restaurant-item', SkeletonRestaurantItem);
