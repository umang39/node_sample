
    let socket =io()
    $('#chatbox').hide()
    $('#login_sys').show()
    $('#sub1').click(function(){
        
        socket.emit('logging',{
            username : $('#usr_name').val()
        })
       
    })
    socket.on('loggedin',(data)=>{
        $('#chatbox').show()
        $('#login_sys').hide()
    })
    $('#sub2').click(function(event){
        let temp = $('<li>',{
            text : $('#content').val(),
            'class' : 'sample'
        })
        $('#list').append(temp)
        console.log(temp)
        socket.emit('msg_to',{
                to : $('#message_to').val(),
                msg : $('#content').val()
        })
    })
    socket.on('msg_snd',(data)=>{
        console.log(data)
        $('#list').append("<li>"+data.from+"<br>"+[data.msg]+"</li>").css("float" , "right")
    })
