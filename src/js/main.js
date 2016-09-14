import $ from "jquery"
import {key} from "./secrets.js"
import {news} from "./news.js"
import {locationHTML} from "./location.js"
import {getSpecial} from "./specials"
import {getFood} from "./foodPhotos.js"
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


ourStoryBtn.on('click', activate)
menuBtn.on('click', activate)
resBtn.on('click', activate)

function showNavLinks(event) {
  event.preventDefault();
  $(".nav-links").removeClass("hidden")
  $(".show-nav-links").addClass("hidden")
}

function navActivate(event) {
  event.preventDefault();
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

activateStory();

function reservationConfirm (event) {
  event.preventDefault();
  $(".reservationError").remove();
  if ($("#fullName").val() !== "" && $("#guests").val() !== ""  && $("#date") !== "") {
    $(".reservations").append(`<div>Your reservation has been confirmed!</div>`)
    function timer (){
      window.location.reload()
    };
    window.setTimeout(timer, 3000);
  } else {
    $(".reservations").append(`<div class="reservationError">Please fill in your name, number of guests, and date. (required)`)
  }
};

$("#reserveTable").on('click', reservationConfirm);