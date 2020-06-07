let route = require('express').Router()
let user = require('../db').user
route.post('/start/login/',function(req,res){
    user.create({
        name : req.body.name,
        password : req.body.password
    }).then((user) =>{
            
            
        res.redirect('/loginpage/start')
        res.send(user)
    }).catch((err)=>{
        
        res.status(300).send(err)
    })

})
route.get('/start/login/',function(req,res){
    user.findAll()
        .then((user) =>{
        res.send(user)
    }).catch((err)=>{
        console.log('err')
        res.status(300).send(err)
    })

})


route.get('/start/',function(req,res){
    res.render('loginpages',{user})

})
 exports = module.exports ={
    route
}
//  }    route

