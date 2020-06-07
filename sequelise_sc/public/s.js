$(function(){
    $('button').click(function(){
       let a =  $(this).text()
        console.log(a)
        $.post('/cart',{
                        name : $('#usrname').val(),
                        email : $('#email').val(),
                        password : $('#pass').val(),
                        id : a
                },function(data){
                    let alert = `<h1>your data is added successfully</h1>`
                    window.alert(alert)
                })
    })
 
    // $('li.a').click(()=>{
    //     console.log('hello')
    //     // $('#1').hide(1000,()=>{
    //     //     $('#1').text('your item is added in your database')
    //     //     $('#1').show(1000) 
    //     // })
    //     // console.log(
    //  
    // })
})
