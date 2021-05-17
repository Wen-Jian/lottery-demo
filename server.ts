const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const Koa = require('koa');
const Router = require('koa-router');
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    router.get(/./, async (ctx: any) => {
        const parsedUrl = parse(ctx.request.url, true);
        const { req, res } = ctx;
        await handle(req, res, parsedUrl);
        ctx.respond = false;
    });
    server.use(router.routes()).listen(3000);
    console.log('listening on port 3000');
});

export {};
