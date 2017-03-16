var Artist = require('./../js/music.js').artistModule;

var displayArtist = function(artistName, displayImages, artistId, album_names, album_images, top_track_names, top_track_previews) {
  $('#artist_image').append("<img src='" + displayImages + "'>");
  $('#artist_name').text(artistName);

  for(var i=0; i<album_names.length; i++){
    $('#album_names').append("<li>" + album_names[i] + "</li>");
    $('#album_images').append("<img src='" + album_images[i] + "'>");
  }

  for(var j=0; j<top_track_names.length; j++){
    $('#top_tracks').append("<li>" + top_track_names[j] + "</li>");
    $('#top_tracks').append(
      "<audio controls=controls>" +
      "<source src='"+top_track_previews[j]+"'type='audio/mpeg'>" +
      "</audio>");
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
