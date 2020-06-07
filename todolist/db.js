let sequelize = require('sequelize')
let db = new sequelize('todo' ,'todouser','mypass',{
    host  : 'localhost',
    dialect  : 'mysql',
})
let todolist = db.define('todolist',{
    task : sequelize.STRING
})
db.sync()
exports = module.exports = {
    todolist
}