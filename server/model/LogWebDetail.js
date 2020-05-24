const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db/index')

class LogWebDetail extends Model {}

LogWebDetail.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  task_id: {
    type: DataTypes.BIGINT,
    comment: '所属任务ID'
  },
  log_type: {
    type: DataTypes.INTEGER,
    comment: '日志类型'
  },
  content: {
    type: DataTypes.STRING,
    comment: '日志内容'
  },
  log_level: {
    type: DataTypes.INET,
    comment: '日志等级'
  },
  minute_offset: {
    type: DataTypes.INET,
    comment: '距离当天0点的分钟数'
  },
  log_time: {
    type: DataTypes.BIGINT,
    comment: '本条日志产生的具体时间戳'
  },
  add_time: {
    type: DataTypes.timestamp,
    comment: '添加时间'
  },
  update_time: {
    type: DataTypes.timestamp,
    comment: '更新时间'
  }
}, {
  sequelize,
  modelName: 'LogDetail'
})

module.exports = LogWebDetail