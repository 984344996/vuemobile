const  Koa = require('koa');
const  app = new Koa();
const  Router = require('koa-router');
const  router = new Router();
const Cros = require('koa2-cors');

let { loginMock } = require('./mock.js');
app.use(Cros());

router.all('*',function (ctx, next) {
    ctx.set('Access-Control-Allow-Origin', "http://localhost:8080");
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, myheader');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set('Access-Control-Max-Age', 5);
    next();
});

//登录
router.get('/api/login', async ctx => {
    console.log('url = ' + ctx.url, ctx.querystring);
    ctx.body = loginMock();
    ctx.statusCode = 0;
    return ctx;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, err => {
    if (err) throw err;
    console.log('server running...');
});