let route = require('express').Router()
let help = [
    {
        task  : 'let do some task1',
        task  : 'let do some task2',
        task  : 'let do some task3'
    }
]
// route.get('/',function(req,res){
//     res.send(help)
// })
route.post('/',function(req,res){
        help.push(
            {task : req.body.name}
        )
    res.send(help)
}) 
module.exports = route