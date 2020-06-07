function additems(){
    let list_item = $('<li>',{
        text : $(task).val(),
        'class' : 'list-group-item'
    })
    $('#ul_list').append(list_item)
    $('#task').val('')
    list_item.click(()=>{
        console.log('hwloo')
        list_item.toggleClass('done')
    })
}
$('#add').click(()=>{
    additems()
})
$('#reset').click(()=>{
    $(task).val('')
})
$('#delete').click(function(){
    console.log('clicked')

    $('#ul_list').empty()
})
$('#task').keypress((e) => {
    console.log(e.which)
    // if (e.which == 13) additems()
  })
$('#task').on('input',()=>{
    $('#add').prop('disabled',$('#task').val()=='')
    // $('').prop('disabled',$('#task').val()=='')
    $('#reset').prop('disabled',$('#task').val()=='')
    $('#delete').prop('disabled',1==2)
    $('#sort').prop('disabled',$('#ul_list').children().length < 1)
})
$('#sort').click(()=>{
    $('#ul_list .done').appendTo('#ul_list1')
})