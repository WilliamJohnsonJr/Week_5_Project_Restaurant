import $ from 'jquery'

var ourStoryBtn = $(".story");
var menuBtn = $(".men");
var resBtn = $(".res");

var ourStory = $(".ourStory")
var menu = $("#menDiv");
var reservation = $(".reservations");

function activate(event) {
  if (this.classList.contains("inactive")){
    if (this.classList.contains("story")) {
      //buttons
      ourStoryBtn.removeClass("inactive");
      ourStoryBtn.addClass("active");

      resBtn.removeClass("active");
      resBtn.addClass("inactive");

      menuBtn.removeClass("active");
      menuBtn.addClass("inactive");

      //divs
      ourStory.removeClass("hidden")
      menu.addClass("hidden")
      reservation.addClass("hidden")
    }
    else if (this.classList.contains("res")) {
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
    } else { //if menu div
      //buttons
      menuBtn.removeClass("inactive");
      menuBtn.addClass("active");

      ourStoryBtn.removeClass("active");
      ourStoryBtn.addClass("inactive");

      resBtn.removeClass("active");
      resBtn.addClass("inactive");

      //divs
      menu.removeClass("hidden")
      ourStory.addClass("hidden")
      reservation.addClass("hidden")
    }
  }
}

export {ourStoryBtn, menuBtn, resBtn, ourStory, menu, reservation, activate}