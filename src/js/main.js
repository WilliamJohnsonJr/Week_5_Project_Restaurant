import $ from "jquery"
import {key} from "./secrets.js"
import {news} from "./news.js"
import {locationHTML} from "./location.js"
import {getSpecial} from "./specials"
import {getFood} from "./foodPhotos.js"
// import {getImg} from "./featureImg.js"
import {getDinner} from "./dinnermenu"
var baseURL = `https://api.flickr.com/services/`

function get() {
  var things = $.ajax({
    url: `${baseURL}rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&tags=restaurant_seating&page=1`
  }).then(function(things) {
  });
};

getSpecial();
getDinner();