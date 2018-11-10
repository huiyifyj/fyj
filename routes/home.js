import homeData from '../config/data/home';
import aboutData from '../config/data/about';

export default (router) => {
    router.all('/', home)
          .all('/about', about)
          .all('/rss', rss);
}

const home = (ctx) => {
    ctx.render('index', homeData);
}

const about = (ctx) => {
    ctx.render('about', aboutData);
}

const rss = (ctx) => {
    ctx.response.body = '<h1>RSS Page</h1>'
}
