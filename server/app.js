const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const config = require('./config/index')

const app = new koa()

/* resolve all routes */
const index = require('./routes/index')

/* set bodyparser middleware */
app.use(bodyParser())

/* set cors middleware */
app.use(cors({
  credentials: true
}))

/* set all routes */
app.use(index.routes()).use(index.allowedMethods())

/* set log middleware */
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()

  const rt = Date.now() - start

  console.log(`${ctx.method} ${ctx.url} ${rt}ms`)
})

app.listen(config.port, () => {
  console.log('KOAN listening on port ' + config.port)
})
