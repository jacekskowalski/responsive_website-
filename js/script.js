
let slideIndex = 1;
showSlides(slideIndex);
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
<<<<<<< HEAD
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
 let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dotBlack");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " activeSlide";
}



navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});
=======
navBarToggle.addEventListener('click',  () =>{
        mainNav.classList.toggle('active');
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
        showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
        showSlides(slideIndex = n);
}

function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" activeSlide", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
}
>>>>>>> 3f6b953bdaaaca7020b2b52e84ad4c9b8fc7d537
