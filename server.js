import path from 'path';

import Koa from 'koa';
import server from 'koa-static';
import logger from 'koa-logger';
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
   .use(server(path.join(__dirname, '/public')))
   .use(routers.routes())
   .use(routers.allowedMethods())
   .listen(3000, () => console.log('Listening on port 3000'));
