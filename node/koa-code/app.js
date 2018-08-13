const Koa = require('./lib/application');
const app = new Koa();

app.use((ctx) => {
    ctx.body = 'hello world';
})


app.listen(1234);
