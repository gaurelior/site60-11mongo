var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
const body = document.body;
function toggleDarkMode(){
  body.classList.toggle ('dark-mode'); 
}
function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}
const button = document.getElementById('docsButton');

button.addEventListener('click', function(e) {
  const circle = document.getElementById('circle');
  
  // Reset animation
  circle.style.animation = 'none';
  circle.offsetHeight; /* trigger reflow */
  circle.style.animation = null; 
  
  // Add animation class
  circle.classList.add('animate');
  
  // Remove animation class after animation completes
  setTimeout(function() {
    circle.classList.remove('animate');
  }, 500); // Animation duration
});
