const exp = require('express')
const app = exp()
let data = require('./data')
let user = require('./db').user
let product = require('./db').product
app.set('view engine','hbs')
app.set('views',__dirname + '/public')
app.use(exp.json())
app.use(exp.urlencoded({extended : true}))
app.get('/data',function(req,res){
    product.bulkCreate([
        {
            product_id : 1,
            product_name : 'pen', 
            price : 20
        } ,{
            product_id : 2,
            product_name : 'pencil', 
            price : 5
        }, {
            product_id : 3,
            product_name : 'eraser', 
            price : 5
        }
    ]).then(()=>{
        console.log('data is inserted successfully')
    }).catch(()=>{
        console.log('error is generated while storing data')
    })

    res.send('successfull')
})
app.post('/',(req,res)=>{
    user.create({
        name : req.body.name1,
        pssword : req.body.pass,
        email : req.body.email,
        p_id : req.body.p_id,
        productProductId : req.body.p_id
    })
    .then((user)=>{
        res.redirect('/insert')
    })
})
app.get('/insert',(req,res)=>{
    user.findAll(
       {include : [product]}
    )
    .then((user)=>{
        res.render('main',{user})
    })
})
app.get('/user',(req,res)=>{
    user.bulkCreate([{
        name : 'umang',
        pssword : 'mypass',
        email : 'toshugupta3@gmail.com',
        p_id : 1,
        productProductId : 1
    },{
        name : 'dhairya',
        pssword : 'mypass1',
        email : 'toshugupta579@gmail.com',
        p_id : 2,
        productProductId : 2
    }]).then(()=>{
        res.send('success')
    })
})
app.get('/',function(req,res){
    res.render('index')
})
app.get('/productdata',function(req,res){
    product.findAll()
    .then((product)=>{
        res.json(product)
    })
    .catch(()=>{
        console.log('error is generated while fetching data')
    })
})
app.get('/userdata',function(req,res){
    user.findAll({
        include : [product]
    })
    .then((user)=>{
        res.send(user)
    })
    .catch(()=>{
        console.log('error is generated while fetching data')
    })
})
app.listen(8000,()=>{
    console.log("server is started successfully started ")
})