// $(function(){

//     let name = $('#name')
//     let sub = $('#sub')
//     let age = $('#age')
//     let l = $('#list')
//     function combinor(person){
//         l.empty();
//         for(person of person){
//             l.append(
//             <li>${person.name}</li>
//             )
//         }
//     }
//     $.get(
//         '/api/persons',
//         function(data){
//             combinor(data)
//         }
//     )
//     sub.click(function(){
//         $.post(
//             '/api/persons',
//             {
//                 name :name.val(),
//                 age :age.val()
//             },
//             function(data){
//                 combinor(data);
//             }
//         )
//     })
    
// })


$(function () {

    let inp_name = $('#name')
    let inp_age = $('#age')
    // let inp_city = $('#city')
    let btn_submit = $('#sub')
    let tbl_persons = $('#list')

    function refreshPersonTable (persons) {
        tbl_persons.empty()
        tbl_persons.append(
            `<tr>
            <th>Name</th>
            <th>Age</th>
            
            </tr>`
        )
        for (person of persons) {
            tbl_persons.append(
                `
                    <li>${person.name}</li>
                    <li>${person.age}</li>
                
                `
            )
        }
    }

    $.get('/api/persons/', function (data) {
        refreshPersonTable(data)
    })

    btn_submit.click(function () {
        $.post('/api/persons/', 
        {
            name: inp_name.val(),
            age: inp_age.val()
            
        },
        function (data) {
            refreshPersonTable(data)
        }
    )

    })

})