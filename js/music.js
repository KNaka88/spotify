function Artist() {
  // this.artistName = artistName;
  // this.artistId = artistId;
  // this.displayImages = displayImages;
}

Artist.prototype.showArtist = function(userInput, callback){
  $.get("https://api.spotify.com/v1/search?q="+userInput+"&type=artist").then(function(response){
    console.log(response);
    var artist = [];

    for(var i=0; i<response.artists.items.length, i++){
      var artistName = response.artists.items[0].name;
      var displayImages = response.artists.items[0].images[0].url;
      var artistId = response.artists.items[0].id;
      artist.push([artistName, displayImages, artistId]);
    }

    console.log(artist);
    var albums = showAlbums(artistId);
    console.log(albums);

    callback(artistName, displayImages, artistId, albums);

  });
};


var showAlbums = function(artistId, callback){
  $.get("https://api.spotify.com/v1/artists/"+artistId+"/albums").then(function(response){
    var albums = [];

    for(var i=0; i<response.items.length; i++){
        albums.push(response.items[i].name);
    }
    console.log(albums);
      callback(albums, callback);
  });
};
exports.artistModule = Artist;
