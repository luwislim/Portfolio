// Navbar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
let NavbarMain = document.getElementById('menu-js')
let NavbarToggle = document.getElementById('toggle-js')

NavbarToggle.addEventListener('click',function(){
  NavbarMain.classList.toggle('active');
});



// Slider for galleries
var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); 
}