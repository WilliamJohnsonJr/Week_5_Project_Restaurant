import $ from "jquery"
import {key} from "./secrets.js"
import {populateNews, extend} from "./news.js"
import {locationHTML} from "./location.js"
import {getSpecial} from "./specials"
import {getFood} from "./foodPhotos.js"
// import {getImg} from "./featureImg.js"
import {getDinner} from "./dinnermenu"
import {ourStoryBtn, menuBtn, resBtn, ourStory, menu, reservation, activate, activateStory, activateMenu, activateReservation} from "./menu-nav.js"
var baseURL = `https://api.flickr.com/services/`

function get() {
  var things = $.ajax({
    url: `${baseURL}rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&tags=restaurant_seating&page=1`
  }).then(function(things) {
  });
};

getSpecial();
getDinner();
populateNews();
$(".read-more").on('click', extend)

ourStoryBtn.on('click', activate)
menuBtn.on('click', activate)
resBtn.on('click', activate)

function showNavLinks(event) {
  $(".nav-links").removeClass("hidden")
  $(".show-nav-links").addClass("hidden")
}

function navActivate(event) {
  if (event.target.innerHTML === 'Story') {
    event.preventDefault();
    activateStory();
  } else if (event.target.innerHTML === 'Reservations') {
    event.preventDefault();
    activateReservation();
  } else if (event.target.innerHTML === 'Menu') {
    event.preventDefault();
    activateMenu();
  } else if (event.target.innerHTML === "Hide") { 
      $(".nav-links").addClass("hidden")
      $(".show-nav-links").removeClass("hidden")
  }
  $(".show-nav-links").on("click", showNavLinks)
};

$(".nav-link").on('click', navActivate)



function alertReservation(event) {
  event.preventDefault();
  if(confirm("Your reservation has been made.")){
    window.location.reload();  
  }
}


activateStory();

function reservationConfirm (event) {
  event.preventDefault();
  if ($("#fullName").val() !== "" && $("#guests").val() !== ""  && $("#date") !== "") {
     $(".reservations").append(`<div>Your reservation has been confirmed!</div>`)
  } else {
    $(".reservations").append(`<div>Please fill in your name, number of guests, and date. (required)`)
  }
};


$("#reserveTable").on('click', reservationConfirm);

// remove border-bottom and border-arround from featButn
// add hidden class to all featButn
// remove hidden from clicked
// add border-around to clicked
// add border-bottom to not clicked

