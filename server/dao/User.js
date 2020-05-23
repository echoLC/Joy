const User = require('../model/User')
const bcrypt = require('bcryptjs')

class UserDao {
  static async create(data) {
    const { username, password, phone } = data

    const hasUser= await User.findOne({
      where: {
        phone,
        deleted_at: null
      }
    });

    if (hasUser) {
      throw new Error('用户已存在')
    }

    const user = new User()
    user.username = username
    user.phone = phone
    user.password = password
    user.save()

    return {
      id: user.id,
      username: username.username,
      phone: user.phone
    }
  }

  // 验证密码
  static async verify(phone, plainPassword) {

    // 查询用户是否存在
    const user = await User.findOne({
      where: {
        phone
      }
    })

    if (!user) {
      throw new Error('账号不存在或者密码不正确')
    }

    // 验证密码是否正确
    const correct = bcrypt.compareSync(plainPassword, user.password);

    if (!correct) {
      throw new Error('账号不存在或者密码不正确')
    }

    return user
  }

  static async getUser (id) {
    // 查询管理员是否存在
    const user = await User.findOne({
      where: {
        id
      }
    })

    if (!user) {
      throw new Error('用户不存在')
    }

    return user
  }
}

module.exports = UserDao
