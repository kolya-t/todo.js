$(document).ready(function(){
    $.getJSON('http://localhost:5000/tasks', function(data) {
    	//window.console&&console.log(data)
    	var TheList = $('ul.dzamilpersaneg');

    	$.each(data, function(i,item){
			var aaa = $('<a/>')
				.text(item.description + ' ' + item.is_done);

			aaa.on('click', function (event) { 
				console.log('clicked' + item.id)

				var patch = {'is_done': 1 - item.is_done}
				console.log(patch)
				$.ajax({
				   type: 'PATCH',
				   url: 'http://localhost:5000/tasks/' + item.id,
				   data: JSON.stringify(patch),
				   processData: false,
				   contentType: 'application/json',
				});
			})

	    	var li = $('<li/>')
				.addClass('Quask')
				.append(aaa);

	    	TheList.append(li);
    	});
    });
});
