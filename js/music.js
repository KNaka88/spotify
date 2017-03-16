function Artist() {
  // this.artistName = artistName;
  // this.artistId = artistId;
  // this.displayImages = displayImages;
}

Artist.prototype.showArtist = function(userInput, callback){
  var artistName = "";
  var displayImages = "";
  var artistId = "";
  var albums = [];

  $.get("https://api.spotify.com/v1/search?q="+userInput+"&type=artist")

    .then(function(response){
      artistName = response.artists.items[0].name;
      displayImages = response.artists.items[0].images[0].url;
      artistId = response.artists.items[0].id;
      return $.get("https://api.spotify.com/v1/artists/"+artistId+"/albums");
    })

    .then(function(response2){
        for(var i=0; i<response2.items.length; i++){
            albums.push(response2.items[i].name);
      }
    })
    
    .then(function(){
      callback(artistName, displayImages, artistId, albums);
    });

};
exports.artistModule = Artist;
