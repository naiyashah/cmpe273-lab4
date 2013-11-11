 $(document).ready(function(){
    var elements = $('td[title="status"]');
    for( i=0; i<elements.length; i++ ){
            var newStatusIs = elements[i].innerHTML;
            var numId = elements[i].id.slice("6");
            var id = "#"+NumId;
            if(newStatusIs == "lost")
                    {
                            $(id).attr("disabled","disabled");
                    }
            else{
                    $(id).removeAttr("disabled");
            }
    }
});

$(":button").click(function() {
        var isbn = this.id;
        var uri = "/library/v1/books/"+isbn+"?status=lost";
        var btnDisable = "#"+isbn;
        var newStatus = "#status"+isbn;
        alert('About to report lost on ISBN ' + isbn);
        
        $.ajax({
                 url: uri,
                 type: 'PUT',
                 success: function(data) {
                         $(btnDisable).attr("disabled","disabled");
                         $(newStatus).text("lost");
                 }
                });
});
