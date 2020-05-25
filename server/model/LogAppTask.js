const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db/index')

class LogAppTask extends Model {}

LogAppTask.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  platform: {
    type: DataTypes.TINYINT,
    allowNull: false,
    comment: '平台: android: 1, IOS: 2, PC: 3'
  },
  amount: {
    type: DataTypes.STRING,
    comment: '文件大小'
  },
  app_id: {
    type: DataTypes.STRING,
    comment: 'app标识'
  },
  union_id: {
    type: DataTypes.STRING,
    comment: '用户标识'
  },
  device_id: {
    type: DataTypes.STRING,
    comment: '设备标识'
  },
  app_version: {
    type: DataTypes.STRING,
    comment: 'APP版本'
  },
  build_version: {
    type: DataTypes.STRING,
    comment: '构建版本'
  },
  log_file_name: {
    type: DataTypes.STRING,
    comment: '日志文件所在路径'
  },
  log_date: {
    type: DataTypes.INTEGER,
    comment: '日志所属日期'
  },
  add_time: {
    type: DataTypes.INTEGER,
    comment: '业务字段，日志上报时间'
  },
  status: {
    type: DataTypes.TINYINT,
    comment: '日志状态：未分析过：1，已分析过：2'
  },
  update_time: {
    type: DataTypes.BIGINT,
    comment: '更新时间'
  }
}, {
  sequelize,
  modelName: 'LogAppTask'
})

module.exports = LogAppTask