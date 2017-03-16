var Artist = require('./../js/music.js').artistModule;

var displayArtist = function(artistName, displayImages, artistId, album_names, album_images, top_track_names, top_track_previews) {
  $('#artist_image').append("<img src='" + displayImages + "'>");
  $('#artist_name').text(artistName);

  for(var i=0; i<album_names.length; i++){
    $('#album_names').append(
      "<div class='col-md-4'>"+
        "<div class='card' style='width: 320px;'>" +
          "<h4 class='card-header'>" +
          "<div class='album-title'>" +
            album_names[i] +
          "</div>" +
           "</h4>" +
          "<div class='card-block'>" +
            "<img class='card-img-top' src='" + album_images[i]+ "'alt='album cover'>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
    // $('#album_names').append("<li>" + album_names[i] + "</li>");
    // $('#album_images').append("<img src='" + album_images[i] + "'>");
  }

  for(var j=0; j<top_track_names.length; j++){
    // $('#top_tracks').append("<li> "+top_track_names[j] + "</li>"
    //   );
    //
    // $('#tracks_samples').append(" <audio controls=controls>" +
    // "<source src='"+top_track_previews[j]+"'type='audio/mpeg'>" +
    // "</audio></li>");

    $('#top_tracks').append(
      "<div class='col-md-7 track_names'>" +
        "<li>"+ top_track_names[j] + "</li>" +
      "</div>" +
      "<div class='col-md-5 track_previews'>" +
        "<li><audio controls=controls>" +
          "<source src='"+top_track_previews[j]+"'type='audio/mpeg'>" +
        "</audio></li>" +
      "</div>"
    );

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


// ('<div class="card" style="width: 20rem;"><img class="card-img-top" src="' + album_images[i]'" alt="album cover"><div class="card-block"> <h4 class="card-title">' + album_names[i] + '</h4></div></div>');
