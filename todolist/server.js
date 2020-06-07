let express = require('express')
let db = require('./db').todolist
let app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set('view engine','hbs')
app.set('views',__dirname+'/views')
// let task =['hello world']
app.get('/',(req,res)=>{
    db.findAll()
    .then((task)=>{
       
    res.render('index',{task})
    })
})
app.get('/login',(req,res)=>{
    db.findAll()
    .then((todo)=>{
        let flag=0
        for(todo of todo ){
            console.log(todo.task)
            console.log(req.body.task)
            if(todo.task == req.body.task){
                res.render('index',{task})
                flag=1
            }
        }
        if(!flag){
            res.send("not able to find")
        }
    })
})
app.post('/',(req,res)=>{
    db.create({
        task : req.body.task
    }).then((task) => {
        console.log(req.body.task)
        
        res.redirect('/')
    }).catch((err)=>{
        res.send(err)
    })
})
app.listen(4444, ()=>{
    console.log('started')
}) 