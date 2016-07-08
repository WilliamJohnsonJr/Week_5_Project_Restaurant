import $ from "jquery";

var baseURL = `https://json-data.herokuapp.com/restaurant`

var menus;
var dailySpecial = [];

var specialAjaxCall = $.ajax({
	url: `${baseURL}/special/1`,
	dataType: 'json',
});

var fancyMenu =  $.ajax({
  	url: `${baseURL}/menu/1`
});

var alaydisMenu = $.ajax({
  	url: `${baseURL}/menu/2`
});

var pubMenu = $.ajax({
  	url: `${baseURL}/menu/3`
});

fancyMenu.then(function(){
	menus = fancyMenu.responseJSON;
	console.log(menus);
});

console.log(menus);

export { menus };