const Router = require('koa-router')
const log = require('../dao/Log')

const router = new Router({
  prefix: '/api'
})

router.post('/log/web', async ctx => {
  const data = ctx.request.body
  try {
    await log.log(data)
    ctx.status = 200
    ctx.body = { msg: null }
  } catch (err) {
    console.error(err)
  }
})

module.exports = router