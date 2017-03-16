function Artist() {
  // this.artistName = artistName;
  // this.artistId = artistId;
  // this.displayImages = displayImages;
}

Artist.prototype.showArtist = function(userInput, callback){
  var artistName = "";
  var displayImages = "";
  var artistId = "";
  var album_names = [];
  var album_images = [];


  $.get("https://api.spotify.com/v1/search?q="+userInput+"&type=artist")

    .then(function(response){
      artistName = response.artists.items[0].name;
      displayImages = response.artists.items[0].images[1].url;
      artistId = response.artists.items[0].id;
      return $.get("https://api.spotify.com/v1/artists/"+artistId+"/albums?market=US");
    })

    .then(function(response2){
        for(var i=0; i<response2.items.length; i++){
            album_names.push(response2.items[i].name);
            album_images.push(response2.items[i].images[1].url);
      }
    })

    .then(function(){
      callback(artistName, displayImages, artistId, album_names, album_images);
    });

};
exports.artistModule = Artist;
