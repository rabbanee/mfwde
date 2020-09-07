import Navigo from 'navigo';
import home from '../views/pages/home';

const routes = {
  init(content) {
    const navigo = new Navigo('http://localhost:8080/', true);
    navigo.on({
      '*': home.render(content),
    });
  },
};

export default routes;