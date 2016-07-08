var baseURL = `https://api.flickr.com/services/`
import $ from "jquery";
import _ from "lodash";

var baseURL = `https://json-data.herokuapp.com/restaurant`

var specialAjaxCall = $.ajax({
	url: `${baseURL}/special/1`,
	dataType: 'json',
});

var fancyMenu =  $.ajax({
  	url: `${baseURL}/menu/1`,
  	dataType: 'json',
});

var alaydisMenu = $.ajax({
  	url: `${baseURL}/menu/2`,
  	dataType: 'json'
});

var pubMenu = $.ajax({
  	url: `${baseURL}/menu/3`,
  	dataType: 'json'
});

function getSpecial (){
  specialAjaxCall.then(function(){
	var menus = [];
	var dailySpecial=[];

	dailySpecial.push(specialAjaxCall.responseJSON);

	fancyMenu.then(function(){
		menus.push(fancyMenu.responseJSON);
	});

	alaydisMenu.then(function(){
		menus.push(alaydisMenu.responseJSON);
	});

	pubMenu.then(function(){
		var specialObj;
		var foodArray = [];
		menus.push(pubMenu.responseJSON);
		console.log(menus);
		var specialID = dailySpecial[0].menu_item_id;
		var objectKeysArray = menus.map(function(object){
			return Object.keys(object);
		});
		var objectValuesArray = [];
		menus.forEach(function(object){
			for (var prop in object){
				objectValuesArray.push(object[prop]);
			};
		});
		console.log(objectValuesArray);
		objectValuesArray.forEach(function(array){
			array.forEach(function(object){
				foodArray.push(object);
			});
		});
		console.log(foodArray);
		foodArray.forEach(function(object){
			if (object.id===specialID) {
				specialObj = object;
			};
		});
		console.log(specialObj);
		console.log(dailySpecial);
		$(".specials").append(`
			<h4 class="specialName">${specialObj.item}<span class="specialPrice">...........${specialObj.price}</span></h4>
			<p class="specialDescription">${specialObj.description}
			</p>`);
	});
  });
};

export {getSpecial};
