var Artist = require('./../js/music.js').artistModule;

var displayArtist = function(artistName, displayImages, artistId, albums) {
  $('#artist_image').append("<img src='" + displayImages + "'>");
  $('#artist_name').text(artistName);

  albums.forEach(function(album){
      $('#albums').append("<li>" + album + "</li>");
  });

};


$(document).ready(function(){
  $("#artist_form").submit(function(event){
    event.preventDefault();
    var userInput = $("#artist").val();

    var newArtist  = new Artist();
    newArtist.showArtist(userInput, displayArtist);

  });
});
