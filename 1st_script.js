function Change_is_done(item, aaa){
    aaa.on('click',function(event){

        var opposit_of_is_done = 1 - $('a#' + item.id).attr(("is_done"))
        var patch = {'is_done': opposit_of_is_done}
        //window.console&&console.log(patch)
        $.ajax({
            type: 'PATCH',
            url: 'http://localhost:5000/tasks/' + item.id,
            data: JSON.stringify(patch),
            processData: false,
            contentType: 'application/json',
            success: function(){
                $('a#' + item.id).attr("is_done", opposit_of_is_done)
            },
            error: function(){
                alert('An error accured!');
            }
        });
    })
};

function Initial_list_load() {
    $.getJSON('http://localhost:5000/tasks', function(data) {
        window.console&&console.log(data)
        var TheList = $('ul.dzamilpersaneg');

        $.each(data, function(i,item){
            var aaa = $('<a/>')
                .attr("id", item.id)
                .attr("is_done", item.is_done)
                .text(item.description);


            Change_is_done(item,aaa)

            var li = $('<li/>')
                .addClass('Quask')
                .append(aaa);

            TheList.append(li);            
        });
    });
};

$(document).ready(Initial_list_load())