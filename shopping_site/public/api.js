$(function(){
    let name = $('#text-n')
    let password = $('#text-p')
    $.get('loginpage/start/login/',  function(data){
        for(user of data){
            $('#list').append(
                ` <li>${user.name}</li>`
            )}
        })
        $('#sub').click(function(){
            $.post('loginpage/start/login/',{
                name:name.val(),
                password:password.val()
            },
                function(data){
                    for(let user of data){
                        $('#list').append(
                         '<li>'+  user.name + '</li>'
                        )
                    }
                    
                   
                })
        })
        $('#sub1').click(function(){
            console.log("button clicked")
            $.get('/loginpage/start/')
            
        }
  
})