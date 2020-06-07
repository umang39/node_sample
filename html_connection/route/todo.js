// let route = require('express').Router()
const routes = require('express').Router()
let todo = [
    {task:'hello'},
    {task:'world'}
]
routes.get('/',function(req,res){
    res.render('index',{todo})
})
routes.post('/',function(req,res){
    todo.push(
        {task : req.body.newtodo}
    )
    res.redirect('./todos')
})
module.exports = routes