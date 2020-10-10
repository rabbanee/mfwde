class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set title(title) {
    this._title = title;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="restaurant-list">
        <div class="wrapper-search">
          <h2 tabindex="0" aria-label="Explore Restaurant">${this._title ? this._title : 'Explore'} Restaurant</h2>
          <div class="wrapper-input">
            <input type="text" aria-label="Search" name="search" id="search-input" placeholder="Search Restaurant by Name or City">
            <button type="button" class="search-button">Search</button>
          </div>
        </div>
        <div class="wrapper">

        </div>
      </section>
  `;
  }
}

customElements.define('restaurant-list', RestaurantList);
