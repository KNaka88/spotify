$(document).ready(function(){
  $("#artist_form").submit(function(event){
    event.preventDefault();
    var artist = $("#artist").val();




    $.get("https://api.spotify.com/v1/search?q="+artist+"&type=artist", function(response){
      var artistName = 
      var displayImages = response.artists.items[0].images[0].url;
      var artistId = response.artists.items[0].id;
      // console.log(artistId);
      $('#artist_image').append("<img src='" + displayImages + "'>");
    });

    $.get("https://api.spotify.com/v1/albums/"+artistId+"/", function(response){
      console.log(JSON.stringify(response));
    });

  });
});
