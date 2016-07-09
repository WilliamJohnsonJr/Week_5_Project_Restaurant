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
					<li class="fontawesome-warning-sign allergies menButton item${menuItem.id}"></li>
					<li class="fontawesome-star-empty favorite menButton item${menuItem.id}"></li>
					<li class="maki-fire-station  spicy menButton item${menuItem.id}"></li>
					<li class="vegan menButton item${menuItem.id}">V</li>
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
					<li class="fontawesome-warning-sign allergies menButton item${menuItem.id}"></li>
					<li class="fontawesome-star-empty favorite menButton item${menuItem.id}"></li>
					<li class="maki-fire-station  spicy menButton item${menuItem.id}"></li>
					<li class="vegan menButton item${menuItem.id}">V</li>
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
					<li class="fontawesome-warning-sign allergies menButton item${menuItem.id}"></li>
					<li class="fontawesome-star-empty favorite menButton item${menuItem.id}"></li>
					<li class="maki-fire-station  spicy menButton item${menuItem.id}"></li>
					<li class="vegan menButton item${menuItem.id}">V</li>
				</ul>
			</div>`);	
		});
		$(".menButton").on('mouseenter', function(event){
			event.preventDefault();
			if($(event.target).hasClass("allergies")){
				$(event.target).after(`<div class="menButtonDiv addOn">
					<p class="menButtonDivHeader addOn">
					Allergy Info
					</p>
					<p class="menButtonMessage addOn">
					Allergy Message
					</p>
				</div>`);	
			} else if($(event.target).hasClass("favorite")){
				$(event.target).after(`<div class="menButtonDiv addOn">
					<p class="menButtonDivHeader addOn">
					Favorite
					</p>
					<p class="menButtonMessage addOn">
					Favorite this menu item.
					</p>
				</div>`);		
			} else if($(event.target).hasClass("spicy")){
				$(event.target).after(`<div class="menButtonDiv addOn">
					<p class="menButtonDivHeader addOn">
					Spicy
					</p>
					<p class="menButtonMessage addOn">
					This item is not spicy.
					</p>
				</div>`);		
			} else {
				$(event.target).after(`<div class="menButtonDiv addOn">
					<p class="menButtonDivHeader addOn">
					Vegan
					</p>
					<p class="menButtonMessage addOn">
					This item is not vegan-friendly.
					</p>
				</div>`);
			};
			document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
			document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
		});
		$(".menButton").on('mouseleave', function(event){
				$(".addOn").remove();
		});
	});
};

export {getDinner};
