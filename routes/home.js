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
        },
        articles: [
            {
                time: 'Dec 20, 2018',
                title: 'Lorem ipsum dolor sit amet.'
            },
            {
                time: 'Oct 25, 2016',
                title: 'Lorem ipsum dolor sit amet consectetur.'
            },
            {
                time: 'Feb 11, 2015',
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
            },
            {
                time: 'Jan 3, 2014',
                title: 'Lorem ipsum dolor sit amet.'
            },
            {
                time: 'Dec 29, 2013',
                title: 'Lorem ipsum dolor sit.'
            },
            {
                time: 'Nov 4, 2013',
                title: 'Lorem ipsum dolor sit amet consectetur.'
            }
        ]
    });
}

const about = (ctx) => {
    ctx.response.body = '<h1>About Page</h1>'
}

const rss = (ctx) => {
    ctx.response.body = '<h1>RSS Page</h1>'
}
