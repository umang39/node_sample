$(function(){
    let box = $("#box")
    let additems =$("#add")
    let unlist =$("#unlist")
    $.post(
        '/todo/',
        {task : box.value},
        function(data){
            for(todo of data){
                unlist.append("<li>"+todo.task+"</li>")
            }
        }
    )
})