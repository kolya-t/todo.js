function Change_is_done(item, aaa,login_pare){
    aaa.on('click',function(event){

        var opposit_of_is_done = 1 - $('a#' + item.id).attr(("is_done"))
        var patch = {'is_done': opposit_of_is_done}
        $.ajax({
            type: 'PATCH',
            url: 'http://localhost:5000/tasks/' + item.id,
            data: JSON.stringify(patch),
            headers: {'Authorization': 'Basic ' + login_pare},
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

function Initial_list_load(login_pare) {
    $.ajax({
        url: 'http://localhost:5000/tasks',
        dataType: 'json',
        headers: {'Authorization': 'Basic ' + login_pare},
        success: function(data) {
            var TheList = $('ul.dzamilpersaneg');

            $.each(data, function(i,item){
                var aaa = $('<a/>')
                    .attr("id", item.id)
                    .attr("is_done", item.is_done)
                    .text(item.description);

                Change_is_done(item,aaa,login_pare)

                var li = $('<li/>')
                    .addClass('Quask')
                    .append(aaa);

                TheList.append(li);
            });
             $('form.cookieform').hide()
        },
        error: function(){
            alert('An error accured!')
        }
    })
}