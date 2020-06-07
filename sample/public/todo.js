$(function(){
    let newtodo = $('#task')
    let list =$('#list')
    let sub = $('#sub')
    sub.click(function(){
        console.log('button clicked')
        $.post(
            '/public/',
            {name : newtodo.val()},
            function(data){
               
                for(a of data){
                    console.log('heelo')
                    list.append(
                            "<li>"+a.task+"</li>"
                        )     
                }
            }
        )
    })
   
})