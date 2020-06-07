let routes = require('express').Router()
let teach = [
    {
        name:'umang',
        class : 12
    },
     {
        name:'toshu',
        class : 12
    }
]
routes.get('/',function(req,res){
    res.send(teach)
})
routes.post('/',function(req,res){
        teach.push({
            name : req.body.name,
            class : req.body.class
        })
        res.send(teach)
})
module.exports = routes