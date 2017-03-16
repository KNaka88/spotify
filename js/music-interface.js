var Artist = require('./../js/music.js').artistModule;

var displayArtist = function(artistName, displayImages, artistId, album_names, album_images) {
  $('#artist_image').append("<img src='" + displayImages + "'>");
  $('#artist_name').text(artistName);


  for(var i=0; i<album_names.length; i++){
    $('#album_names').append("<li>" + album_names[i] + "</li>");
    $('#album_images').append("<img src='" + album_images[i] + "'>");
  }
};


$(document).ready(function(){
  $("#artist_form").submit(function(event){
    event.preventDefault();
    var userInput = $("#artist").val();

    var newArtist  = new Artist();
    newArtist.showArtist(userInput, displayArtist);

  });
});
