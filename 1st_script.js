$(document).ready(function(){
    $('#example-4').click(function(){
        $.getJSON('http://localhost:5000/tasks', function(data) {
	    	window.console&&console.log(data)

	    	var TheList = $('#quask_lists')
/*
	    	$("button").click(function(){
       			const $ul = $('<ul>', {class: "dzamilpersaneg"}).append(
					  data.map(task =>
					    $("<li>").append($("<a>").text(task))
					  )
					);window.console&&console.log(data.map(task =>
					    $("<li>").append($("<a>").text(task))
					  )
					);
    		});*/

	    	$.each(data, function(i,item){
				var aaa = $('<a/>')
					.text(item.description);

		    	var li = $('<li/>')
					.append(aaa);

		    	TheList.append(li);
	    	});

        });
    });
});
