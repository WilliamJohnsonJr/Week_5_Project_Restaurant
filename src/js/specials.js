import $ from "jquery";

var baseURL = `https://json-data.herokuapp.com/restaurant`

function getSpecials() {
	  var specialToday = $.ajax({
	    url: `${baseURL}/special/1`
	  }).then(function(things) {
	  	console.log(things);
	  });
	function getMenus(){
	  
	  var fancyMenu = $.ajax({
	  	url: `${baseURL}/menu/1`
	  }).then(function(menuObj){
	  	var menus = [];
	  	menus.push(menuObj);
	  	console.log(menus)
	  });

	  var alaydisMenu = $.ajax({
	  	url: `${baseURL}/menu/2`
	  }).then(function(menuObj){
	  	// menus.push(menuObj);
	  })

	  var pubMenu = $.ajax({
	  	url: `${baseURL}/menu/3`
	  }).then(function(menuObj){
	  	// menus.push(menuObj);
	  });
	  // console.log(menus);
	};
	getMenus();
};

export {getSpecials};