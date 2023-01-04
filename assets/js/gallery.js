$(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        type:"GET",
        dataType:'json',
        success:function(response){
            $(response).each(function(index,image){
                $('#userGrid').append($('<div class="col-4">').
                append($('<div class="gallery-single">').
                append($('<a href="" target="_blank">').attr('href',image.url).
                append($('<div class="gallery-img">').
                append($('<img src="">').attr('src',image.thumbnailUrl)))).
                append($('<div class="gallery-id-title">').text(image.id+'.'+image.title))))
            })
        },
        error:function(status){
            console.log(status)
        }
    })
})