const exp = require('express')
const app = exp()
const path = require('path')
let data = require('./data')
let user = require('./db').user
let product = require('./db').product
let u 
app.set('view engine','hbs')
app.set('views',__dirname + '/public')
app.use(exp.json())
app.use(exp.urlencoded({extended : true}))
app.use('/',exp.static(path.join(__dirname + '/public')))
app.get('/',function(req,res){
    product.findAll()
    .then(async(product)=>{
        res.render('index',{product})
    })
    .catch(async () =>{
        console.log('error is generating in rendering index file')
    })
})
app.get('/showcart',async (req,res)=>{
    // u = req.body.name
    user.findAll({
        where : {name : u},
        include : [product]
    })
     .then((user)=>{
         res.render('main',{user})
     })
     
})
app.post('/cart', async (req,res)=>{
    u = req.body.name
    user.create({
        name : req.body.name ,
        pssword : req.body.password,
        email : req.body.email,
        p_id : req.body.id,
        productProductId : req.body.id
    }).then(()=>{
        res.send(user)
    })
})
app.listen(8000,()=>{
    console.log("server is started successfully started ")
})