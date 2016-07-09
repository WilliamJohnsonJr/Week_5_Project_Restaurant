import $ from 'jquery'

var ourStoryBtn = $(".story");
var menuBtn = $(".men");
var resBtn = $(".res");

var ourStory = $(".ourStory");
var menu = $("#menDiv");
var reservation = $(".reservations");

function activateStory() {
  //buttons
      ourStoryBtn.removeClass("inactive");
      ourStoryBtn.addClass("active");

      resBtn.removeClass("active");
      resBtn.addClass("inactive");

      menuBtn.removeClass("active");
      menuBtn.addClass("inactive");

      //divs
      ourStory.removeClass("hidden");
      menu.addClass("hidden");
      reservation.addClass("hidden");
}

function activateReservation() {
  //buttons
      resBtn.removeClass("inactive");
      resBtn.addClass("active");

      ourStoryBtn.removeClass("active");
      ourStoryBtn.addClass("inactive");

      menuBtn.removeClass("active");
      menuBtn.addClass("inactive");

      //divs
      reservation.removeClass("hidden");
      ourStory.addClass("hidden");
      menu.addClass("hidden");
}

function activateMenu() {
  //buttons
      menuBtn.removeClass("inactive");
      menuBtn.addClass("active");

      ourStoryBtn.removeClass("active");
      ourStoryBtn.addClass("inactive");

      resBtn.removeClass("active");
      resBtn.addClass("inactive");

      //divs
      menu.removeClass("hidden");
      ourStory.addClass("hidden");
      reservation.addClass("hidden");
}

function activate(event) {
  if (this.classList.contains("inactive")){
    if (this.classList.contains("story")) {
      activateStory();
    }
    else if (this.classList.contains("res")) {
      activateReservation();
    } else { //if menu div
      activateMenu();
    }
  }
}

export {ourStoryBtn, menuBtn, resBtn, ourStory, menu, reservation, activate, activateStory, activateMenu, activateReservation}









