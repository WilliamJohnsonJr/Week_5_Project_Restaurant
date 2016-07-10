import $ from "jquery";
import _ from "lodasH";

var baseURL = `https://json-data.herokuapp.com/restaurant`

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

function getDinner (){
  var menuKeys = []
  
  var fancyMenu =  $.ajax({
    url: `${baseURL}/menu/1`,
    dataType: 'json',
  }).then(function(fancyMenu){
    for (var menu in fancyMenu) {
      menuKeys.push(menu)
    }
    var menus = {}
    for (var i = 0; i < menuKeys.length; i++) {
      menus[`${menuKeys[i]}`] = fancyMenu[menuKeys[i]]
    }
    nameMenus(menus)
  });
}






  // fancyMenu.then(function(){
  //   console.log(fancyMenu.responseJSON);
  //   var itemHTML = `<ul class="menuItems">`
  //   fancyMenu.responseJSON.appetizers.forEach(function(menuItem){

  //     var item = {
  //       name: menuItem.item,
  //       price: menuItem.price,
  //       description: menuItem.description,
  //       allergies: menuItem.allergies,
  //       spicy: menuItem.spicy,
  //       vegan: menuItem.vegan,
  //       favorite: menuItem.favorite
  //     }
  //     spec(item)

  //     itemHTML += 
  //     $(".appsList").append(itemHTML + "</ul>")
  //   });

  //   fancyMenu.responseJSON.entrees.forEach(function(menuItem){
  //     var itemHTML = `<ul class="menuItems">`
  //     var item = {
  //       name: menuItem.item,
  //       price: menuItem.price,
  //       description: menuItem.description,
  //       allergies: menuItem.allergies,
  //       spicy: menuItem.spicy,
  //       vegan: menuItem.vegan,
  //       favorite: menuItem.favorite
  //     }
  //     spec(item)
  //     itemHTML += `<li class="menuItem">
  //                   <div class="menu-item-header">
  //                     <p class="item-name">${item.name}</p>
  //                     <p class="item-price">${item.price}</p>
  //                   </div>
  //                     <p class="item-description">${item.description}</p>
                  
                  
  //                 <ul class="specs">
  //                   <li class="fontawesome-warning-sign spec allergies"><p class="">${item.allergies}</p></li>
  //                   <li class="fontawesome-star-empty spec favorite"><p class="">${item.favorite}</p></li>
  //                   <li class="maki-fire-station spec spicy"><p class="">${item.spicy}</p></li>
  //                   <li class="vegan spec">V<p class="">${item.vegan}</p></li>
  //               </ul>
  //               </li></div>`
  //     $(".entreesList").append(itemHTML + "</ul>")
  //   });

  //   fancyMenu.responseJSON.sides.forEach(function(menuItem){
  //     var itemHTML = `<ul class="menuItems">`
  //     var item = {
  //       name: menuItem.item,
  //       price: menuItem.price,
  //       description: menuItem.description,
  //       allergies: menuItem.allergies,
  //       spicy: menuItem.spicy,
  //       vegan: menuItem.vegan,
  //       favorite: menuItem.favorite
  //     }
  //     spec(item)
  //     itemHTML += `<li class="menuItem">
  //                   <div class="menu-item-header">
  //                     <p class="item-name">${item.name}</p>
  //                     <p class="item-price">${item.price}</p>
  //                   </div>
  //                     <p class="item-description">${item.description}</p>
                  
                  
  //                 <ul class="specs">
  //                   <li class="fontawesome-warning-sign spec allergies"><p class="">${item.allergies}</p></li>
  //                   <li class="fontawesome-star-empty spec favorite"><p class="">${item.favorite}</p></li>
  //                   <li class="maki-fire-station spec spicy"><p class="">${item.spicy}</p></li>
  //                   <li class="vegan spec">V<p class="">${item.vegan}</p></li>
  //               </ul>
  //               </li></div>`
  //     $(".sidesList").append(itemHTML + "</ul>")
  //   });

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
//     //    $(".addOn").remove();
//     // });
//   });
// };

export {getDinner};
