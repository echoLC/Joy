const Router = require('koa-router')
const User = require('../dao/User')

const router = new Router({
  prefix: '/api'
})

// 用户注册
router.post('/register', async (ctx) => {

  const { username, password, phone } = ctx.body

  // 创建用户
  const user = await User.create({
    username,
    password,
    phone
  })

  // 返回结果
  ctx.response.status = 200
  ctx.body = res.json(user)
})

router.post('/login', async ctx => {
  const { phone, password } = ctx.body
    // 验证账号密码是否正确
    try {
      const user = await User.verify(phone, password)
      if (user) {
        ctx.response.status = 200
        ctx.body = user
      }
    } catch (err) {
      ctx.response.status = 500
      ctx.body = { msg: err.message }
    }
})

router.get('/user', async ctx => {
  const { id } = ctx.params.id

  let userInfo = await User.detail(id)

  // 返回结果
  ctx.response.status = 200
  ctx.body = res.json(userInfo)
})

module.exports = router


