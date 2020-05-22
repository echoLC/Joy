const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const config = require('./config/index')

const app = new koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()

  const rt = Date.now() - start

  console.log(`${ctx.method} ${ctx.url} ${rt}ms`)
})

app.listen(config.port, () => {
  console.log('KOAN listening on port ' + config.port)
})
