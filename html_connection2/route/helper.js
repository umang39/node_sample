let route = require('express').Router()
let help = [
    {task : 'umang'},
    {task:'dhairya'}
]
route.get('/',function(req,res){
    res.render('index',{help})
})
route.post('/',function(req,res){
    help.push({
        task:req.body.textinput
    })
    res.redirect('./help')
})
module.exports = route