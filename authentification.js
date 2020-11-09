function first_autentification(){
	$('form.cookieform').show()
}

function local_storage_check(){
	console.log(localStorage.getItem('login_pare'))
	if (localStorage.getItem('login_pare') != undefined) {
    	Initial_list_load(localStorage.getItem('login_pare'))
    }
    else{
    	first_autentification()
    }
}

function listener_placement(){
	$('input.page').click(function(e){
        e.preventDefault();
        localStorage.setItem('login_pare', btoa($('input[name="username"]').val() + ':' + $('input[name="password"]').val()))
    	Initial_list_load(localStorage.getItem('login_pare'))
	})
	local_storage_check()
}

function wrong_local_storage_login_pare(){
	localStorage.removeItem('login_pare')
	local_storage_check()
}


$(document).ready(listener_placement)