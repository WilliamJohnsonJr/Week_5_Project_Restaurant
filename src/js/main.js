import $ from "jquery";
import {key} from "./secrets.js";
import {news} from "./news.js";
import {getSpecials} from "./specials";
var baseURL = `https://api.flickr.com/services/`

function get() {
  var things = $.ajax({
    url: `${baseURL}rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&tags=restaurant_seating&page=1`
  }).then(function(things) {
  });
};

getSpecials();