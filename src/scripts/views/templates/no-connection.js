class NoConnection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
       no-connection {
          height: 100vh;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
      }
      
      no-connection h2{
        margin-bottom: 30px;
        font-size: 26px;
      }
      
      no-connection img{
        width: 100%;
        max-width: 320px;
      }
      </style>
      <h2 tabindex="0">No Connection</h2>
      <img src="/images/no-connection.jpg" srcset="./images/no-connection-small.jpg 480w, ./images/no-connection-large.jpg 800w"
           sizes="(max-width: 600px) 480px, 800px" alt="no connection image" aria-label="No connection's image" tabindex="0">
    `;
  }
}

customElements.define('no-connection', NoConnection);

export default NoConnection;
