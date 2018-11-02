import path from 'path';

import Koa from 'koa';
import logger from 'koa-logger';
import staticCache from 'koa-static-cache';
import bodyParser from 'koa-bodyparser';
import render from 'koa-art-template';

import routers from './routes';

const app = new Koa();

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.htm',
    escape: true,
    minimize: true
});

app.use(logger())
   .use(bodyParser())
   .use(staticCache(path.join(__dirname, "./public"), {
        maxAge: 365 * 24 * 60 * 60
   }))
   .use(routers.routes())
   .use(routers.allowedMethods())
   .listen(3000, () => console.log('Listening on port 3000'));
