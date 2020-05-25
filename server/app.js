const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const config = require('./config/index')

// init .env
require('dotenv').config()

const app = new Koa()

/* resolve all api */
const user = require('./api/user')
const log = require('./api/log')

/* set cors middleware */
app.use(cors({
  credentials: true
}))

/* set bodyparser middleware */
app.use(bodyParser())

/* set all routes */
app.use(user.routes())
app.use(log.routes())

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
