import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import './views/templates/restaurant-item';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('load', () => {
  app.renderPage();
});