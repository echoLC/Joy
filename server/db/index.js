const Sequelize = require('sequelize')
const config = require('../config/db')

const { user, host, dbName } = config
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timezone: '+08:00',
    timestamps: true,
    paranoid: true,
    logging: false,
    underscored: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  },
  host
})

async function authenticate () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

authenticate()

// 创建模型
sequelize.sync({ force: false })

module.exports = sequelize
 