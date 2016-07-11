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
					<li class="fontawesome-warning-sign allergies menButton ${menuItem.id}"></li>
					<li class="fontawesome-star-empty favorite menButton ${menuItem.id}"></li>
					<li class="maki-fire-station  spicy menButton ${menuItem.id}"></li>
					<li class="vegan menButton ${menuItem.id}">V</li>
				</ul>
			</div>`);
			$(".menButton").on('mouseenter', function(event){
				event.preventDefault();
				if($(event.target).hasClass("allergies")){
					if(menuItem.allergies == 0){
						menuItem.allergies = "No allergens in this food";
					} else if (menuItem.allergies == 1){
						menuItem.allergies = "This item contains food allergens";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Allergy Info
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.allergies}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);
				} else if($(event.target).hasClass("favorite")){
					if(menuItem.favorite == 0){
						menuItem.favorite = "This is a standard menu item";
					} else if (menuItem.favorite == 1){
						menuItem.favorite = "This item is a favorite of our in-house chef";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Favorite
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.favorite}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);		
				} else if($(event.target).hasClass("spicy")){
					if(menuItem.spicy == 0){
						menuItem.spicy = "Not spicy";
					} else if (menuItem.spicy == 1){
						menuItem.spicy = "This item is spicy";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Spicy
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.spicy}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);		
				} else {
					if(menuItem.vegan == 0){
						menuItem.vegan = "This item is not vegan-friendly";
					} else if (menuItem.vegan == 1){
						menuItem.vegan = "This item is vegan-friendly";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Vegan
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.vegan}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);
				};
				document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
				document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
			});
			$(".menButton").on('mouseleave', function(event){
					$(".addOn").remove();
			});		
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
					<li class="fontawesome-warning-sign allergies menButton ${menuItem.id}"></li>
					<li class="fontawesome-star-empty favorite menButton ${menuItem.id}"></li>
					<li class="maki-fire-station  spicy menButton ${menuItem.id}"></li>
					<li class="vegan menButton ${menuItem.id}">V</li>
				</ul>
			</div>`);	
			$(".menButton").on('mouseenter', function(event){
				event.preventDefault();
				if($(event.target).hasClass("allergies")){
					if(menuItem.allergies == 0){
						menuItem.allergies = "No allergens in this food";
					} else if (menuItem.allergies == 1){
						menuItem.allergies = "This item contains food allergens";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Allergy Info
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.allergies}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);
				} else if($(event.target).hasClass("favorite")){
					if(menuItem.favorite == 0){
						menuItem.favorite = "This is a standard menu item";
					} else if (menuItem.favorite == 1){
						menuItem.favorite = "This item is a favorite of our in-house chef";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Favorite
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.favorite}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);		
				} else if($(event.target).hasClass("spicy")){
					if(menuItem.spicy == 0){
						menuItem.spicy = "Not spicy";
					} else if (menuItem.spicy == 1){
						menuItem.spicy = "This item is spicy";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Spicy
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.spicy}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);		
				} else {
					if(menuItem.vegan == 0){
						menuItem.vegan = "This item is not vegan-friendly";
					} else if (menuItem.vegan == 1){
						menuItem.vegan = "This item is vegan-friendly";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Vegan
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.vegan}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);
				};
				document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
				document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
			});
			$(".menButton").on('mouseleave', function(event){
					$(".addOn").remove();
			});		
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
			$(".menButton").on('mouseenter', function(event){
				event.preventDefault();
				if($(event.target).hasClass("allergies")){
					if(menuItem.allergies == 0){
						menuItem.allergies = "No allergens in this food";
					} else if (menuItem.allergies == 1){
						menuItem.allergies = "This item contains food allergens";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Allergy Info
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.allergies}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);
				} else if($(event.target).hasClass("favorite")){
					if(menuItem.favorite == 0){
						menuItem.favorite = "This is a standard menu item";
					} else if (menuItem.favorite == 1){
						menuItem.favorite = "This item is a favorite of our in-house chef";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Favorite
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.favorite}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);		
				} else if($(event.target).hasClass("spicy")){
					if(menuItem.spicy == 0){
						menuItem.spicy = "Not spicy";
					} else if (menuItem.spicy == 1){
						menuItem.spicy = "This item is spicy";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Spicy
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.spicy}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);		
				} else {
					if(menuItem.vegan == 0){
						menuItem.vegan = "This item is not vegan-friendly";
					} else if (menuItem.vegan == 1){
						menuItem.vegan = "This item is vegan-friendly";
					};
					$(".container").append(`<div class="menButtonDiv addOn">
						<p class="menButtonDivHeader addOn">
						Vegan
						</p>
						<p class="menButtonMessage addOn">
						${menuItem.vegan}
						</p>
						<div class="triangle">
						</div>
						<div class="triangle2">
						</div>
					</div>`);
				};
				document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
				document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
			});
			$(".menButton").on('mouseleave', function(event){
					$(".addOn").remove();
			});		
		});
	});
};

export {getDinner};