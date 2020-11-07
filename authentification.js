function first_autentification(){    
    $('form.cookieform').show()
    $('input.page').click(function(e){
        e.preventDefault();
        localStorage.setItem('login_pare', btoa($('input[name="username"]').val() + ':' + $('input[name="password"]').val()))
        Initial_list_load(localStorage.getItem('login_pare'))
    })
}

$(document).ready(first_autentification)