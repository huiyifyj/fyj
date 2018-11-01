import Router from 'koa-router';

import home from './home';

const routers = new Router();

const initRouters = (route) => {
    home(route);
}

initRouters(routers);

export default routers;
