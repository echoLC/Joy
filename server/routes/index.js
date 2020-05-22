const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})

router.get('/', ctx => {
  ctx.body = 'hello, world'
})

router.get('/user', ctx => {
  ctx.body = {
    id: '123',
    username: 'echoLC'
  }
})

module.exports = router