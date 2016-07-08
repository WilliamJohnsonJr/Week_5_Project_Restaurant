import $ from "jquery";
import _ from "lodasH";

var baseURL = `https://json-data.herokuapp.com/restaurant`

function getDinner (){
	var fancyMenu =  $.ajax({
  	url: `${baseURL}/menu/1`,
  	dataType: 'json',
	});

	fancyMenu.then(function(){
		console.log(fancyMenu.responseJSON);
		fancyMenu.responseJSON.appetizers.forEach(function(menuItem){
			var description;
			if( menuItem.description !== ""){
				description = menuItem.description;
			} else {
				description = "No description needed - the name says it all!";
			};
			$(".appsList").append(`
			<p class="itemLine">
				<span class="itemName">${menuItem.item}</span><span class="itemPrice">${menuItem.price}</span></p>
			<div class="itemDescription"><p class="descriptionP">${description}</p>
				<ul class="buttonsUL">
					<li class="fontawesome-warning-sign allergies"></li>
					<li class="fontawesome-star-empty favorite"></li>
					<li class="maki-fire-station  spicy"></li>
					<li class="vegan">V</li>
				</ul>
			</div>`);	
		});
		fancyMenu.responseJSON.entrees.forEach(function(menuItem){
			var description;
			if( menuItem.description !== ""){
				description = menuItem.description;
			} else {
				description = "No description needed - the name says it all!";
			};
			$(".entreesList").append(`
			<p class="itemLine">
				<span class="itemName">${menuItem.item}</span><span class="itemPrice">${menuItem.price}</span></p>
			<div class="itemDescription"><p class="descriptionP">${description}</p>
				<ul class="buttonsUL">
					<li class="fontawesome-warning-sign allergies"></li>
					<li class="fontawesome-star-empty favorite"></li>
					<li class="maki-fire-station  spicy"></li>
					<li class="vegan">V</li>
				</ul>
			</div>`);	
		});
		fancyMenu.responseJSON.sides.forEach(function(menuItem){
			var description;
			if( menuItem.description !== ""){
				description = menuItem.description;
			} else {
				description = "No description needed - the name says it all!";
			};
			$(".sidesList").append(`
			<p class="itemLine">
				<span class="itemName">${menuItem.item}</span><span class="itemPrice">${menuItem.price}</span></p>
			<div class="itemDescription"><p class="descriptionP">${description}</p>
				<ul class="buttonsUL">
					<li class="fontawesome-warning-sign allergies"></li>
					<li class="fontawesome-star-empty favorite"></li>
					<li class="maki-fire-station  spicy"></li>
					<li class="vegan">V</li>
				</ul>
			</div>`);	
		});
	});
};

export {getDinner};
