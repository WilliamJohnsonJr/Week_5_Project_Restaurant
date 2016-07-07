import $ from "jquery"
function get() {
  var things = $.ajax({
    data: {
      nojsoncallback: 1
    },
    dataType: "json",
    url: "https://api.flickr.com/services/feeds/photos_public.gne",
    format: "json"
  }).then(function(things) {
    console.log(things)
  })
}

get()