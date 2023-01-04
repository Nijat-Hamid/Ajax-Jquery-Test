$(function(){
    $.ajax({
    url:'https://jsonplaceholder.typicode.com/users',
    type:'GET',
    dataType:'json',
    success:function(response){
        $(response).each(function(index,user){
            $('#userGrid').append($('<div class="col-4">').append($('<div class="user-single">').
            append($('<p class="user-id-name-username">').text(user.id+'.'+' '+ user.name+' | '+ user.username)).
            append($('<p class="user-mail">').text('Email: '+user.email)).
            append($('<address class="user-adress">').text('Adress: '+ user.address.street + ', ' + user.address.suite+', '+ user.address.city+', '+user.address.zipcode)).
            append($('<div class="user-geo">').text('Geo: '+ user.address.geo.lat + ' | ' + user.address.geo.lng )).
            append($('<a class="user-phone text-decoration-none" href="tel:+">').text('Phone: '+user.phone)).
            append($('<a href="#" class="text-decoration-none user-website">').text('Website: '+user.website)).
            append($('<p class="user-company">').text('Company: ' + user.company.name)))
            )    
        })
    },
    error:function(status){
        console.log(status)
    }
    })
})