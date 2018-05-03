$.getJSON("/api/v0/data", function(data){
    index(data)
});

function index(data){
    $.each(data, function(i, d){
        $('#index-content').append($('<li>').append(d));
    });
}