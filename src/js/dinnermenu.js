import $ from "jquery";
import _ from "lodasH";

var baseURL = `https://json-data.herokuapp.com/restaurant/`


function highlight() {
  var buttons = $(".spec")
  for (var i = 0; i < buttons.length; i++) {
    var children = buttons[i].children
    for (var a = 0; a < children.length; a++) {
      if (children[a].classList.contains("invisible") === false) {
        buttons[i].classList += " glow"
      }
    }
  }
}

function hide(event) {
  if (event.target.children.length > 0 &&
    event.target.children[0].classList != "invisible") {
    if (event.target.children[0].classList.contains("hidden") === false) {
      $(event.target.children[0]).addClass("hidden")
    }
  }
}

function show() {
  if (event.target.children.length > 0 &&
      event.target.children[0].classList != "invisible") {
      $(event.target.children[0]).removeClass("hidden")
  }
}

function hideEmptySpecs() {
  var spec = $(".spec")
  spec.each(function(item){
    for (var i = 0; i < spec[item].children.length; i++)
    if (spec[item].children[i].classList.contains("top") && 
        spec[item].children[i].textContent === '') {
      spec[item].children[i].classList += " invisible"
    }
  })
}

function spec(item) {
  if (item.allergies != 0) {
        item.allergies = "Contains Allergens."
      } else {
        item.allergies = ""
      }
      if (item.favorite != 0) {
        item.favorite = "Humdrum Favorite."
      } else {
        item.favorite = ""
      }
      if (item.spicy != 0) {
        item.spicy = "Spicy."
      } else {
        item.spicy = ""
      }
      if (item.vegan != 0) {
        item.vegan = "Vegan."
      } else {
        item.vegan = ""
      }
}

function printSmall(menu) {
  var menuHTML = `<ul class="items">`
  menu.forEach(function(item) {
    spec(item)
    menuHTML += `<ul id="sides" class="items">
                  <li class="item">
                    <div class="item-header">
                      <p class="item-title">${item.item}</p>
                      <p class="item-price">${item.price}</p>
                    </div>
                    <div class="item-info">
                      <ul class="item-specs">
                        <li class="spec fontawesome-warning-sign allergy">
                          <p class="top hidden">${item.allergies}</p>
                        </li>
                        <li class="spec fontawesome-star-empty favorite">
                          <p class="top hidden">${item.favorite}</p>
                        </li>
                        <li class="spec maki-fire-station spicy">
                          <p class="top hidden">${item.spicy}</p>
                        </li>
                        <li class="spec vegan">
                          V
                          <p class="top hidden">${item.vegan}</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>`
  })

  menuHTML += `</ul>`
  return menuHTML
}

function print(menu) {
  var menuHTML = `<ul class="items">`
  menu.forEach(function(item) {
    spec(item)
    menuHTML += `<ul class="items">
                  <li class="item">
                    <div class="item-header">
                      <p class="item-title">${item.item}</p>
                      <p class="item-price">${item.price}</p>
                    </div>
                    <div class="item-info">
                      <p class="item-description">${item.description}</p>
                      <ul class="item-specs">
                        <li class="spec fontawesome-warning-sign allergy">
                          <p class="top hidden">${item.allergies}</p>
                        </li>
                        <li class="spec fontawesome-star-empty favorite">
                          <p class="top hidden">${item.favorite}</p>
                        </li>
                        <li class="spec maki-fire-station spicy">
                          <p class="top hidden">${item.spicy}</p>
                        </li>
                        <li class="spec vegan">
                          V
                          <p class="top hidden">${item.vegan}</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>`
  })

  menuHTML += `</ul>`
  return menuHTML
}
//                   <li class="fontawesome-warning-sign spec allergies"><p class="">${item.allergies}</p></li>
  //                   <li class="fontawesome-star-empty spec favorite"><p class="">${item.favorite}</p></li>
  //                   <li class="maki-fire-station spec spicy"><p class="">${item.spicy}</p></li>
  //                   <li class="vegan spec">V<p class="">${item.vegan}</p></li>


function nameMenus(menus) {
  var apps = menus.appetizers;
  var entrees = menus.entrees;
  var sides = menus.sides;
  $(".appsList").append(
    print(apps)
    );
  $(".entreesList").append(
    print(entrees)
    );
  $(".sidesList").append(
    printSmall(sides)
    );
  hideEmptySpecs()
  $(".spec").ready(highlight)
  $(".spec").on('mouseenter', show)
  $(".spec").on('mouseleave', hide)
}

function getDinner() {
  var fancyMenu = $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/menu/1`,
    dataType: 'json'
  }).then(function(fancyMenu) {
    nameMenus(fancyMenu)
  })
};

export {getDinner};

// 	fancyMenu.then(function(){
// 		console.log(fancyMenu.responseJSON);
// 		fancyMenu.responseJSON.appetizers.forEach(function(menuItem){
// 			var description;
// 			if( menuItem.description !== ""){
// 				description = menuItem.description;
// 			} else {
// 				description = "No description needed - the name says it all!";
// 			};
// 			$(".appsList").append(`
// 			<p class="itemLine">
// 				<span class="itemName">${menuItem.item}</span><span class="itemPrice">${menuItem.price}</span></p>
// 			<div class="itemDescription"><p class="descriptionP">${description}</p>
// 				<ul class="buttonsUL">
// 					<li class="fontawesome-warning-sign allergies menButton ${menuItem.id}"></li>
// 					<li class="fontawesome-star-empty favorite menButton ${menuItem.id}"></li>
// 					<li class="maki-fire-station  spicy menButton ${menuItem.id}"></li>
// 					<li class="vegan menButton ${menuItem.id}">V</li>
// 				</ul>
// 			</div>`);
// 			$(".menButton").on('mouseenter', function(event){
// 				event.preventDefault();
// 				if($(event.target).hasClass("allergies")){
// 					if(menuItem.allergies == 0){
// 						menuItem.allergies = "No allergens in this food";
// 					} else if (menuItem.allergies == 1){
// 						menuItem.allergies = "This item contains food allergens";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Allergy Info
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.allergies}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);
// 				} else if($(event.target).hasClass("favorite")){
// 					if(menuItem.favorite == 0){
// 						menuItem.favorite = "This is a standard menu item";
// 					} else if (menuItem.favorite == 1){
// 						menuItem.favorite = "This item is a favorite of our in-house chef";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Favorite
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.favorite}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);		
// 				} else if($(event.target).hasClass("spicy")){
// 					if(menuItem.spicy == 0){
// 						menuItem.spicy = "Not spicy";
// 					} else if (menuItem.spicy == 1){
// 						menuItem.spicy = "This item is spicy";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Spicy
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.spicy}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);		
// 				} else {
// 					if(menuItem.vegan == 0){
// 						menuItem.vegan = "This item is not vegan-friendly";
// 					} else if (menuItem.vegan == 1){
// 						menuItem.vegan = "This item is vegan-friendly";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Vegan
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.vegan}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);
// 				};
// 				document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
// 				document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
// 			});
// 			$(".menButton").on('mouseleave', function(event){
// 					$(".addOn").remove();
// 			});		
// 		});
// 		fancyMenu.responseJSON.entrees.forEach(function(menuItem){
// 			var description;
// 			if( menuItem.description !== ""){
// 				description = menuItem.description;
// 			} else {
// 				description = "No description needed - the name says it all!";
// 			};
// 			$(".entreesList").append(`
// 			<p class="itemLine">
// 				<span class="itemName">${menuItem.item}</span><span class="itemPrice">${menuItem.price}</span></p>
// 			<div class="itemDescription"><p class="descriptionP">${description}</p>
// 				<ul class="buttonsUL">
// 					<li class="fontawesome-warning-sign allergies menButton ${menuItem.id}"></li>
// 					<li class="fontawesome-star-empty favorite menButton ${menuItem.id}"></li>
// 					<li class="maki-fire-station  spicy menButton ${menuItem.id}"></li>
// 					<li class="vegan menButton ${menuItem.id}">V</li>
// 				</ul>
// 			</div>`);	
// 			$(".menButton").on('mouseenter', function(event){
// 				event.preventDefault();
// 				if($(event.target).hasClass("allergies")){
// 					if(menuItem.allergies == 0){
// 						menuItem.allergies = "No allergens in this food";
// 					} else if (menuItem.allergies == 1){
// 						menuItem.allergies = "This item contains food allergens";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Allergy Info
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.allergies}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);
// 				} else if($(event.target).hasClass("favorite")){
// 					if(menuItem.favorite == 0){
// 						menuItem.favorite = "This is a standard menu item";
// 					} else if (menuItem.favorite == 1){
// 						menuItem.favorite = "This item is a favorite of our in-house chef";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Favorite
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.favorite}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);		
// 				} else if($(event.target).hasClass("spicy")){
// 					if(menuItem.spicy == 0){
// 						menuItem.spicy = "Not spicy";
// 					} else if (menuItem.spicy == 1){
// 						menuItem.spicy = "This item is spicy";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Spicy
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.spicy}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);		
// 				} else {
// 					if(menuItem.vegan == 0){
// 						menuItem.vegan = "This item is not vegan-friendly";
// 					} else if (menuItem.vegan == 1){
// 						menuItem.vegan = "This item is vegan-friendly";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Vegan
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.vegan}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);
// 				};
// 				document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
// 				document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
// 			});
// 			$(".menButton").on('mouseleave', function(event){
// 					$(".addOn").remove();
// 			});		
// 		});
// 		fancyMenu.responseJSON.sides.forEach(function(menuItem){
// 			var description;
// 			if( menuItem.description !== ""){
// 				description = menuItem.description;
// 			} else {
// 				description = "No description needed - the name says it all!";
// 			};
// 			$(".sidesList").append(`
// 			<p class="itemLine">
// 				<span class="itemName">${menuItem.item}</span><span class="itemPrice">${menuItem.price}</span></p>
// 			<div class="itemDescription"><p class="descriptionP">${description}</p>
// 				<ul class="buttonsUL">
// 					<li class="fontawesome-warning-sign allergies menButton item${menuItem.id}"></li>
// 					<li class="fontawesome-star-empty favorite menButton item${menuItem.id}"></li>
// 					<li class="maki-fire-station  spicy menButton item${menuItem.id}"></li>
// 					<li class="vegan menButton item${menuItem.id}">V</li>
// 				</ul>
// 			</div>`);	
// 			$(".menButton").on('mouseenter', function(event){
// 				event.preventDefault();
// 				if($(event.target).hasClass("allergies")){
// 					if(menuItem.allergies == 0){
// 						menuItem.allergies = "No allergens in this food";
// 					} else if (menuItem.allergies == 1){
// 						menuItem.allergies = "This item contains food allergens";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Allergy Info
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.allergies}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);
// 				} else if($(event.target).hasClass("favorite")){
// 					if(menuItem.favorite == 0){
// 						menuItem.favorite = "This is a standard menu item";
// 					} else if (menuItem.favorite == 1){
// 						menuItem.favorite = "This item is a favorite of our in-house chef";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Favorite
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.favorite}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);		
// 				} else if($(event.target).hasClass("spicy")){
// 					if(menuItem.spicy == 0){
// 						menuItem.spicy = "Not spicy";
// 					} else if (menuItem.spicy == 1){
// 						menuItem.spicy = "This item is spicy";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Spicy
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.spicy}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);		
// 				} else {
// 					if(menuItem.vegan == 0){
// 						menuItem.vegan = "This item is not vegan-friendly";
// 					} else if (menuItem.vegan == 1){
// 						menuItem.vegan = "This item is vegan-friendly";
// 					};
// 					$(".container").append(`<div class="menButtonDiv addOn">
// 						<p class="menButtonDivHeader addOn">
// 						Vegan
// 						</p>
// 						<p class="menButtonMessage addOn">
// 						${menuItem.vegan}
// 						</p>
// 						<div class="triangle">
// 						</div>
// 						<div class="triangle2">
// 						</div>
// 					</div>`);
// 				};
// 				document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
// 				document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
// 			});
// 			$(".menButton").on('mouseleave', function(event){
// 					$(".addOn").remove();
// 			});		
// 		});
// 	});
// };