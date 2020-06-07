let express = require('express')
let app = express()
let http = require('http')
let socket = require('socket.io')
let server = http.createServer(app)
let io = socket(server)
let socketmap = {}
io.on('connection',(socket)=>{
    console.log('connected with:',socket.id)
    socket.on('logging',(data)=>{
        socketmap[socket.id] = data.username
        socket.join(data.username)
        console.log(socketmap)
        socket.emit('loggedin',data)
        console.log(socketmap)
    })
    socket.on('msg_to',(data)=>{
        data.from = socketmap[socket.id]
        io.to(data.to).emit('msg_snd',(data))
        console.log(data)
    })
})
app.use('/',express.static(__dirname + '/public'))
server.listen(8000)

