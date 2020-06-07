var mongoose = require('mongoose')
let data = require('./data')
const multer = require('multer')
const exp = require('express')
const app = require('express')()
const path = require('path')
app.use(exp.static(__dirname + '/public'))
app.set('view engine','hbs')
app.set('views',__dirname+'/public')
app.use(exp.json())
app.use(exp.urlencoded({extended : true}))
const storage = multer.diskStorage({
    destination :function(req,file,cb) {
        console.log('file adding')
        cb(null,__dirname + '/public/images/')
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
const upload = multer({  
    storage : storage
})
var url = "mongodb://127.0.0.1:27017/sample"
mongoose.connect(url , {useNewUrlParser : true})
mongoose.connection
    .on('open',()=>{
        console.log('connection success')
    })
var alienSchema = new mongoose.Schema({
    name  : String , 
    phone : Number,
})
var alien = mongoose.model('user' , alienSchema)
app.get('/update',function(req,res){
    alien.updateMany(
        {phone : 8934891706},
         {$push : {p : 8934000000}},
         (err,data)=>{
             console.log(data)
             res.send('updated')
         }
        )
})
app.post('/update',upload.single('yo'),function(req,res){
    // alien.updateMany(
    //     {phone : 8934891706},
    //      {$push : {p : 8934000000}},
    //      (err,data)=>{
    //          console.log(data)
    //          res.send('updated')
    //      }
    //     )
    var fileinfo = req.file.yo
    res.send(fileinfo)
})

app.get('/index',(req,res)=>{
    
    res.render('main')
})

app.get('/delete',function(req,res){
    alien.deleteMany({name : 'u'},function(err,data){
        if(err) throw err;
        console.log('deleted')
        res.send('deleted')
    })
})

app.get('/store', (req,res)=>{
    deserver = [
        {
            name :'u',
            phone:100,
        },
        {
            name :'d',
            phone : 3456
        }
    ]
    let d = alien.insertMany(deserver,function(err,result){
        console.log(result)
        if(err) {
            console.log(err)
        }
        else{
        res.send('success')

        }
    })
})

app.get('/',(req,res) => { 
    var umang = alien.find({},(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // res.send(data)
            res.render('index',{data})
        // console.log(data)
        }
    })
    // mongoose
})



//  insertion 

// var umang = new alien({
//     name : 'umang',
//     phone : 8934891706
// })
// umang.save()
// .connection.close()
// console.log(umang)

// console.log(umang)

app.listen(8000)