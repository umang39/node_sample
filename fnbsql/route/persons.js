let route = require('express').Router()
let db = require('../db.js')
route.get('/persons/',function(req,res){

    db.ta()
        .then((person)=>{
            res.send(person)
         })
        .catch((err)=>{
                res.send(err)
            // res.render('index',{person})
        })
})
route.post('/persons/',function(req,res){
    db.addnewuser(req.body.name,req.body.age)
        .then(()=>{
            res.send(person)
        })
        .catch((err)=>{
            console.log('error')
            res.render('index')
            // console.log()
            res.send(err)
        })
})
exports=module.exports = {
    route
}