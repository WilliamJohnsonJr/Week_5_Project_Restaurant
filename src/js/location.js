import $ from 'jquery'

var locationHTML = `<p>Our Location</p>
 <iframe height="100px" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=-0.104665%2C%2032.701386&key=AIzaSyASfoADlEq3KS_EdhjcOgCnN4WuEhvrE0c" allowfullscreen></iframe>
 <p>Address</p>
 <ul>
  <li>555-555-1234</li>
  <li>555-555-1234</li>
  <li><a href=#>Map</a></li>
  <li><a href=#>Directions</a></li>
 </ul>`;



 $("#six").append(locationHTML)

 export {locationHTML}