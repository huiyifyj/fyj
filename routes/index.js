import Router from 'koa-router';

import home from './home';

const router = new Router();

const initRouters = (route) => {
    home(route);
}

initRouters(router);

export default router;
