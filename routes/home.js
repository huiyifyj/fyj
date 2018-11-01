export default (router) => {
    router.all('/', home)
          .all('/about', about)
          .all('/rss', rss);
}

const home = (ctx) => {
    ctx.render('index', {
        blog: {
            title: 'Huiyi.FYJ',
            css: ['common', 'index']
        },
        user: {
            name: 'Huiyi.FYJ',
            github: '//github.com/huiyifyj',
            twitter: '//twitter.com/huiyifyj'
        }
    });
}

const about = (ctx) => {
    ctx.response.body = '<h1>About</h1>'
}

const rss = (ctx) => {
    ctx.response.body = '<h1>RSS</h1>'
}
