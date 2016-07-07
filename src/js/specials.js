var baseURL = `https://api.flickr.com/services/`

function getSpecials() {
  var things = $.ajax({
    url: `${baseURL}rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&tags=steak&page=1`
  }).then(function(things) {
  	console.log(things);
  });
};

export {getSpecials};