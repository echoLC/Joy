const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db/index')

class LogWebTask extends Model {}

LogWebTask.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  web_source: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '来源'
  },
  environment: {
    type: DataTypes.STRING,
    comment: '客户端自定义环境信息'
  },
  page_num: {
    type: DataTypes.INTEGER,
    comment: '日志页面'
  },
  device_id: {
    type: DataTypes.STRING,
    comment: '设备标识'
  },
  content: {
    type: DataTypes.STRING,
    comment: '日志内容'
  },
  log_date: {
    type: DataTypes.BIGINT,
    comment: '日志所属日期'
  },
  add_time: {
    type: DataTypes.BIGINT,
    comment: '业务字段，日志上报时间'
  },
  status: {
    type: DataTypes.INTEGER,
    comment: '日志状态：未分析过：1，已分析过：2'
  },
  update_time: {
    type: DataTypes.BIGINT,
    comment: '更新时间'
  },
  custom_report_info: {
    type: DataTypes.STRING,
    comment: '自定义上报信息'
  }
}, {
  sequelize,
  modelName: 'LogAppTask'
})

module.exports = LogWebTask