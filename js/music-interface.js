var Artist = require('./../js/music.js').artistModule;

var displayArtist = function(artistName, displayImages, artistId, album_names, album_images, album_ids, top_track_names, top_track_previews) {
  $('#artist_image').empty();
  $('#artist_name').empty();
  $('#album_names').empty();
  $('#top_tracks').empty();
  $('#top_track_previews').empty();
  $('#artist_image').append("<img id='top_artist_img' src='" + displayImages + "'>");
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
            "<img id='"+album_ids[i]+"'class='card-img-top album' src='" + album_images[i]+ "'alt='album cover' type='button' data-toggle='modal' data-target='#trackModal'>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  $('#top_tracks').append("<h3 id='top-tracks-heading'>Top Tracks</h3>");
  for(var j=0; j<top_track_names.length; j++){
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

  addClicks();
};

var addClicks = function() {
  $('.album').click(function() {
    console.log("clicked!");
    var id = $(this).attr("id");
    var albumTitle = $(this).parent().siblings().find('.album-title').text();
    console.log(albumTitle);
    var newArtist  = new Artist();
    newArtist.getTracks(id,displayAlbum, albumTitle);
  });
};

var displayAlbum = function(tracks, albumTitle) {
  var html = "";
  for(var i=0; i<tracks.length; i++){
    html += "<div class='col-md-7'><li>" + tracks[i][1] + "</li></div>";
    html += "<div class='col-md-5'><li><audio controls=controls>" +
              "<source src='" + tracks[i][2] + "'type='audio/mpeg'>" +
              "</audio></li></div>";
  }
  $("#album_tracks").html(html);
  $('.modal-title').text(albumTitle);
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
