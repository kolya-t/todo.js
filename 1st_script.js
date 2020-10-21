$(document).ready(function(){
    $('#example-4').click(function(){
        $.getJSON('http://localhost:5000/tasks', function(data) {
	    	window.console&&console.log(data)

	    	var TheList = $('ul.dzamilpersaneg')

	    	$("button").click(function(){
       			const $ul = $('<ul>', {class: "dzamilpersaneg"}).append(
					  data.map(task => 
					    $("<li>").append($("<a>").text(task))
					  )
					);window.console&&console.log(data.map(task => 
					    $("<li>").append($("<a>").text(task))
					  )
					);
    		});

	    	$.each(data, function(i,item){

		    	var li = $('<li/>')
		        .addClass(i + 1)
		        .append(TheList);
		   		
		   		var aaa = $('<a/>')
		        .text(item.description)
		        .appendTo(li);

	    		window.console&&console.log(aaa)
	    	});

        });
    });
});
