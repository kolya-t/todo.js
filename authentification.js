function first_autentification(){
	if (localStorage.getItem('login_pare') != '') {
    	Initial_list_load(localStorage.getItem('login_pare'))
    }
    else{    
	    $('form.cookieform').show()
	    $('input.page').click(function(e){
	        e.preventDefault();
	        localStorage.setItem('login_pare', btoa($('input[name="username"]').val() + ':' + $('input[name="password"]').val()))
	    	Initial_list_load(localStorage.getItem('login_pare'))
    	})
    }
}

$(document).ready(first_autentification)