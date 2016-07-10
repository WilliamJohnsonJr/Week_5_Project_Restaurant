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
      var itemHTML = `<div class="item">
      								<ul class="menuItems">`
      var item = {
        name: menuItem.item,
        price: menuItem.price,
        description: menuItem.description,
        allergies: menuItem.allergies,
        spicy: menuItem.spicy,
        vegan: menuItem.vegan,
        favorite: menuItem.favorite
      }
      itemHTML += `<li class="menuItem">
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">${item.price}</p>
                    <p class="item-description">${item.description}</p>
                  </li>
                  </ul>
                  <ul class="specs">
	                	<li class="fontawesome-warning-sign allergies">${item.allergies}</li>
	                	<li class="fontawesome-star-empty favorite">${item.favorite}</li>
	                	<li class="maki-fire-station  spicy">${item.spicy}</li>
	                	<li class="vegan"><p>V${item.vegan}</p></li>
                </ul></div>`
      $(".appsList").append(itemHTML)
    });

    fancyMenu.responseJSON.entrees.forEach(function(menuItem){
      var itemHTML = `<ul class="menuItems">`
      var item = {
        name: menuItem.item,
        price: menuItem.price,
        description: menuItem.description,
        allergies: menuItem.allergies,
        spicy: menuItem.spicy,
        vegan: menuItem.vegan,
        favorite: menuItem.favorite
      }
      itemHTML += `<li class="menuItem">
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">${item.price}</p>
                    <p class="item-description">${item.description}</p>
                  </li>
                  </ul>
                  <ul class="specs">
	                	<li class="fontawesome-warning-sign allergies">${item.allergies}</li>
	                	<li class="fontawesome-star-empty favorite">${item.favorite}</li>
	                	<li class="maki-fire-station  spicy">${item.spicy}</li>
	                	<li class="vegan"><p>V${item.vegan}</p></li>
                </ul>`
      $(".entreesList").append(itemHTML)
    });

    fancyMenu.responseJSON.sides.forEach(function(menuItem){
      var itemHTML = `<ul class="menuItems">`
      var item = {
        name: menuItem.item,
        price: menuItem.price,
        description: menuItem.description,
        allergies: menuItem.allergies,
        spicy: menuItem.spicy,
        vegan: menuItem.vegan,
        favorite: menuItem.favorite
      }
      itemHTML += `<li class="menuItem">
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">${item.price}</p>
                    <p class="item-description">${item.description}</p>
                  </li>
                </ul>
                <ul class="specs">
                	<li class="fontawesome-warning-sign allergies">${item.allergies}</li>
	                	<li class="fontawesome-star-empty favorite">${item.favorite}</li>
	                	<li class="maki-fire-station  spicy">${item.spicy}</li>
	                	<li class="vegan"><p>V${item.vegan}</p></li>
                </ul>`
      $(".sidesList").append(itemHTML)
    });

    // `<ul class="buttonsUL">
    //   <li class="fontawesome-warning-sign allergies menButton item${menuItem.id}"></li>
    //   <li class="fontawesome-star-empty favorite menButton item${menuItem.id}"></li>
    //   <li class="maki-fire-station  spicy menButton item${menuItem.id}"></li>
    //   <li class="vegan menButton item${menuItem.id}">V</li>
    // </ul>`

    // $(".menButton").on('mouseenter', function(event){
    //  event.preventDefault();
    //  if($(event.target).hasClass("allergies")){
    //    $(event.target).after(`<div class="menButtonDiv addOn">
    //      <p class="menButtonDivHeader addOn">
    //      Allergy Info
    //      </p>
    //      <p class="menButtonMessage addOn">
    //      Allergy Message
    //      </p>
    //    </div>`); 
    //  } else if($(event.target).hasClass("favorite")){
    //    $(event.target).after(`<div class="menButtonDiv addOn">
    //      <p class="menButtonDivHeader addOn">
    //      Favorite
    //      </p>
    //      <p class="menButtonMessage addOn">
    //      Favorite this menu item.
    //      </p>
    //    </div>`);   
    //  } else if($(event.target).hasClass("spicy")){
    //    $(event.target).after(`<div class="menButtonDiv addOn">
    //      <p class="menButtonDivHeader addOn">
    //      Spicy
    //      </p>
    //      <p class="menButtonMessage addOn">
    //      This item is not spicy.
    //      </p>
    //    </div>`);   
    //  } else {
    //    $(event.target).after(`<div class="menButtonDiv addOn">
    //      <p class="menButtonDivHeader addOn">
    //      Vegan
    //      </p>
    //      <p class="menButtonMessage addOn">
    //      This item is not vegan-friendly.
    //      </p>
    //    </div>`);
    //  };
    //  document.querySelector(".menButtonDiv").style.top = (event.currentTarget.offsetTop + 37)+"px";
    //  document.querySelector(".menButtonDiv").style.left = (event.currentTarget.offsetLeft - 190)+"px";
    // });
    // $(".menButton").on('mouseleave', function(event){
    //    $(".addOn").remove();
    // });
  });
};

export {getDinner};
