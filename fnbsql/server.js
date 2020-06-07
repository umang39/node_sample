let exp = require('express')
let srv = exp()
let db = require('./db')
// let persons = require('./route/persons')
srv.use(exp.json())
srv.use(exp.urlencoded({extended : true}))
srv.set('view engine','hbs')
srv.set('views',__dirname+'/view')
srv.get('/',function(req,res){
    
 db.ta()
    .then((person)=>{
            res.render('index',{person})
        })
        .catch((err)=>{
                res.send(err)
            // res.render('index',{person})
        })
})
srv.get('/add',function(req,res){
    res.render('person')
})
srv.post('/add',function(req,res){
    db.addnewuser(req.body.name,req.body.age)
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        res.send(err)
    })
})
// srv.use('persons',persons)
srv.listen(8000,()=>{
    console.log("server startes successfully")
})