import homeData from '../config/data/home';

export default (router) => {
    router.all('/', home)
          .all('/about', about)
          .all('/rss', rss);
}

const home = (ctx) => {
    ctx.render('index', homeData);
}

const about = (ctx) => {
    ctx.response.body = '<h1>About Page</h1>'
}

const rss = (ctx) => {
    ctx.response.body = '<h1>RSS Page</h1>'
}
