import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import FadeHelper from '../utils/fade-helper';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url !== 'maincontent') {
      const page = routes[url];

      const fadeHelper = new FadeHelper({
        target: document.querySelector('pre-loader'),

      });

      fadeHelper.fadeIn();
      this._content.innerHTML = await page.render();
      fadeHelper.fadeOut();

      try {
        await page.afterRender();
      } catch (error) {
        this._content.innerHTML = '<no-connection><no-connection/>';
      }
    }
  }
}

export default App;
