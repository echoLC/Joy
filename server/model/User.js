const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db/index')

class User extends Model {

}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名称'
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户手机'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户密码'
  },
  created_at: {
    type: DataTypes.DATE,
    comment: '用户注册时间'
  },
  deleted_at: {
    type: DataTypes.DATE,
    comment: '用户注销时间'
  }
}, {
  sequelize,
  modelName: 'User'
})

module.exports = User

