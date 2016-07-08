import $ from 'jquery'

var locationHTML = `<h4>Our Location</h4>
 <div class="iframe"> 
  <iframe height="100px" frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/place?q=0.296143%2C%2032.621606&key=AIzaSyASfoADlEq3KS_EdhjcOgCnN4WuEhvrE0c" allowfullscreen></iframe>
 </div>
 <p class="address">Kalungi Rd, Muyenga, Kampala</p>
 <ul>
  <li class="first">555-555-1234</li>
  <li>555-555-1234</li>
  <li><a href=#>Map</a></li>
  <li><a href=#>Directions</a></li>
 </ul>`;



 $("#six").append(locationHTML)

 export {locationHTML}