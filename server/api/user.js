const Router = require('koa-router')
const User = require('../dao/User')
const jwt = require('jsonwebtoken')
const secret = require('../config/index').jwt.secret

const router = new Router({
  prefix: '/api'
})

// 用户注册
router.post('/register', async (ctx) => {

  const { username, password, phone } = ctx.request.body

  try {
    // 创建用户
    const user = await User.create({
      username,
      password,
      phone
    })
    // 返回结果
    ctx.response.status = 200
    ctx.body = { code: 0, msg: null, data: user }
  } catch (err) {
    ctx.response.status = 200
    ctx.body = { code: 1, msg: err.message }
  }
})

router.post('/login', async ctx => {
  const { phone, password, username } = ctx.request.body
    // 验证账号密码是否正确
    try {
      const user = await User.verify(phone, password)
      if (user) {
        // 生成token
        const token = jwt.sign({
          username,
          phone
        }, secret, { expiresIn: 8 * 60 * 60 })

        ctx.response.status = 200
        ctx.body = { code: 0, msg: null, token }
      }
    } catch (err) {
      ctx.response.status = 200
      ctx.body = { code: 1, msg: err.message }
    }
})

router.get('/user', async ctx => {
  // 返回结果
  const { username, phone } = ctx.state.user
  ctx.response.status = 200
  ctx.body = {
    code: 0,
    data: {
      username,
      phone
    }
  }
})

module.exports = router


