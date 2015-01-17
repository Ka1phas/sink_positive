$(document).ready(function() {
    $('#chatIn').keypress(function(event){
                    if(event.keyCode == 13){
                    talk();
                    }
    });
});
    
function talk() {
    var input = $('#chatIn').val();
    $('#chatOut').append("<p><b>Nic:</b> '" + input + "'</p>");
    $.ajax({
        url: '/chatbot/',
        type: "POST",
        data: {question: input},
        success: function(response){
            $('#chatOut').append("<p><b>Lilian:</b> '"+ response.answer +"'</p>");
            $('#chatIn').val('');
        }
    });
}