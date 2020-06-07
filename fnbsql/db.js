let mysql =require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
})
function ta(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT* FROM person`,
        function(err,results,fields){
            if(err){
                reject(err)
            }
            else{
                resolve(results)
            }
            }
        )
        
    })
}
function addnewuser(name,age){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO person(name ,age) VALUES(?,?)`,[name,age],
        function(err,results,fields){
            if(err){
                console.log('error in fetching')
                reject(err)
            }
            else{
                
                resolve()
            }
        }
        )
        
    })
}
exports = module.exports ={
    ta,
    addnewuser
}