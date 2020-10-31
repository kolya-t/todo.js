function first_autentification(){    
    $('form.cookieform').show()
    $('input.page').click(function(e){
        e.preventDefault();
        login_pare = $('input[name="username"]').val() + ':' + $('input[name="password"]').val()
        Initial_list_load(login_pare)
    })
}

$(document).ready(first_autentification)