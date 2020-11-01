function input_send(){
    login_pare = first_autentification()
    $('button.addition_button').on('mousedown',function(){  
        var input_value = $("input.addition_input").val() 
        if (input_value.trim() != '') {
            
            var post = {'description': input_value}

            $.ajax({
                type: 'POST',
                url: 'http://localhost:5000/tasks',
                headers: {'Authorization': 'Basic ' + login_pare},
                data: JSON.stringify(post),
                processData: false,
                contentType: 'application/json',
                success: function(){
                    $('ul.dzamilpersaneg').empty()
                    Initial_list_load(login_pare)
                    $('input.addition_input').val('');
                },
                error: function(){
                    alert('An error accured!');
                }        
            })

            //console.log($('ul.dzamilpersaneg'))            
        }
    })
}

function input_out_of_focus(){
    $('input.addition_input').blur(function(){
        $(this).hide()
        $('button.addition_button').hide()
        $('a.addition_a').show()
    })
}
function switching_to_input(){
    $('div.post_list_menu').append('<a class = "addition_a"> + Add a quask</a>')
                           .append('<input placeholder="Do step sis" class = "addition_input"type="text"/>' + '<button class = "addition_button">Add</button>')
    $('input.addition_input').hide()
    $('button.addition_button').hide()

    $('a.addition_a').on('click', function(){
        var a_to_input_replacement = $(this).hide()
        $('input.addition_input').show()
        $('button.addition_button').show()
        $('input.addition_input').focus()
    })
    input_send()
    input_out_of_focus()
}


$(document).ready(switching_to_input)