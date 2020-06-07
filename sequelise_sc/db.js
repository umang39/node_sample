const sequelize = require('sequelize')
const db = new sequelize('sampledb','myuser1','mypass',{
    host : 'localhost',
    dialect : 'mysql'
}) 
db.authenticate()
.then(()=>{
    console.log('db is succesfully authentciate');
}).catch((e)=>{
    console.log('error is catching error in authenticating')
})
const user = db.define('user',{
    name : sequelize.STRING,
    pssword  :sequelize.STRING,
    email : sequelize.STRING
})
const product = db.define('product',{
    product_id : {
        type : sequelize.INTEGER,
        primaryKey : true,
        allowNull : false
    },
    product_name : {
        type : sequelize.STRING
    },
    price : {
        type : sequelize.INTEGER
    }
})
user.belongsTo(product,{foreignKey : 'p_id'})
product.hasMany(user)
db.sync()
.then(()=>{
    console.log('db is synced successfully')
}).catch((e)=>{
    console.log('error is catching error in syncing')
})
module.exports = {
    user,product
}