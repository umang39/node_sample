let exp = require('express')
let app = exp()
let todo = ['hello']
let path = require('path')
app.set('view engine' ,'hbs')
app.set('views',__dirname+'view')
app.use(exp.json())
app.use(exp.urlencoded({extended : true}))
// app.use('/public',exp.static(__dirname + '/view'))
app.use('/get',exp.static(__dirname + '/view'))

3
app.get('/app',function(req,res){
    res.send(todo)
})
app.post('/app',function(req,res){
    todo.push(req.body.task)
    res.send(todo)
})
app.listen(4444) 