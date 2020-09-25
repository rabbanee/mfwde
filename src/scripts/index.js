import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// eslint-disable-next-line import/no-cycle
import App from './views/app';
import swRegister from './utils/sw-register';
import './views/templates/restaurant-item';
import './views/templates/consumer-review-list';
import './views/templates/consumer-review-item';
import './views/templates/pre-loader';
import './views/templates/add-review';
import './views/templates/no-connection';
import './views/templates/restaurant-list';
import './views/templates/menu-content';
import './views/templates/restaurant-detail';
import './views/templates/favorite-button';
import './views/templates/jumbotron-image';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
