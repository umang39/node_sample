$(function(){
    console.log('function is loaded')
    let text = $('#task')
    let list = $('#list')
    let sub = $('#sub')
    sub.click(function(){
        console.log('button clicked')
        $.post('/app',
        {task: text.val()}
        ,function(data){
            list.empty()
            for(a of data){
                list.append(
                    "<li>" + a + "</li>"
                )
            }
        }
        )
    })
})