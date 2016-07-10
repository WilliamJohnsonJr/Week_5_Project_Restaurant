import $ from "jquery"
import {key} from "./secrets.js"

var baseURL = `https://api.flickr.com/services/`

function getFood() {
  var things = $.ajax({
    url: `${baseURL}rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&tags=food&page=1`
  }).then(function(things) {
    var photos = (things.photos.photo)
    for (var i = 0; i < 5; i++) {
      var photo = {
        farm: photos[i].farm,
        id: photos[i].id,
        secret: photos[i].secret,
        server: photos[i].server
      }
      var photoHTML = `<div class="foodImgContainer"><img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg"></div>`
      $("#eight").append(photoHTML)
      // console.log(photoHTML)
    }

  });
};

getFood()

export {getFood}