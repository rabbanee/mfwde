class AddReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          #frame{
            margin-top: 10px;
          }
          
          textarea {
            resize: none;
            overflow: auto;
          }

          .form-group{
            position: relative;
            margin-bottom: 20px;
          }
          .form-group input, .form-group textarea{
            width: 100%;
            font-size: 1em;
            color: grey;
            padding: 10px 10px;
            background: transparent;
            border: 1px solid salmon;
            z-index: 9;
            box-sizing: border-box;
            border-radius: 4px;
            display: block;
          }
          
          .form-group label{
            position: absolute;
            top: -2px;
            padding: 11px 10px;
            transition: all 200ms;
            opacity: 0.5;
            font-size: 1em;
            z-index: -1;
          }

          .form-group input:focus, .form-group textarea:focus{
            outline: none;
          }

          .form-group input:focus + label,
          .form-group textarea:focus + label,
          .form-group input:valid + label,
          .form-group textarea:valid + label{
            top: 7px !important;
            left: 5px;
            font-size: 0.8em;
            transform: translate3d(0, -100%, 0);
            opacity: 1;
            padding: 0px 10px;
            background:#f9f9f9;
            z-index:1;
          }
        </style>
        <h3 tabindex="0">Add Review</h3>
        <div id="frame">
          <div class="form-group">
          <input type="text" name="name" required  id="name"/>
          <label for="name">Name</label>
        </div>
        <div class="form-group">
          <textarea wrap="off" id="review" name="review" cols="30" rows="10" required></textarea>
          <label for="review">Review</label>
        </div>
      </div>
      <button class="add-review-button">Add a Review</button>
    `;
  }
}

customElements.define('add-review', AddReview);

export default AddReview;
