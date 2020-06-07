let express = require('express')
let path = require('path')

let srv = express()
srv.use(express.json())
srv.use(express.urlencoded({extended : true}))
srv.use(express.static(path.join(__dirname + '/public')))
srv.get('/',function(req,res){
    res.render('index')
})

srv.set('view engine', 'hbs');
srv.set('views',__dirname + '/public')
srv.get('/',express.static(path.join(__dirname + '/public')))
// srv.get('/yo',(req,res)=>{
//     res.send("hello")
// })
// srv.use('/login',require('./route/router').route)
srv.use('/loginpage',require('./route/router').route)
srv.listen(8080,()=>{ 
    console.log("server is started")
})