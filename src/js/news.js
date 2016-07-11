import $ from 'jquery'

var news = {
"post_id": 13,
"title": "Come to Our Grand Opening!",
"date_published": "May 25",
"post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}



function populateNews() {
  let string = news.post.slice(0, 467) + "..."
  var newsHTML = `<h4 class="latest">Latest News</h4>
   <div class="row">
   <p>${news.title}</p>
   <p class="r">${news.date_published}</p>
   </div>
   <p class="newsPost">${string}</p>
   <a class='read-more short' href='#'>read more ></a>`


  $('#four').append(newsHTML)
}


function shrink(event) {
  event.preventDefault();
  $("#four").empty()
  $("#four").css('height', '240px')
  populateNews();
  $(".read-more").on('click', extend)
}

function extend(event) {
  event.preventDefault();
  var newsHTML = `<h4 class="latest">Latest News</h4>
   <div class="row">
   <p>${news.title}</p>
   <p class="r">${news.date_published}</p>
   </div>
   <p class="newsPost big-news">${news.post}</p>
   <a class='read-more big-news' href='#'>read less <</a>`

  $("#four").empty()
  $("#four").css('height', '360px')
  $('#four').append(newsHTML)
  // $(".newsPost").css('height', '350px')
  // $(".read-more").css('top', '322px')
  $(".read-more").on('click', shrink)
}


export {populateNews, extend}






