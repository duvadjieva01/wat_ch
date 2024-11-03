let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");  
    }
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("fade"); 
}

showSlides(slideIndex);


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

let currentSlide = 0;
showCarousel(currentSlide);

function switchSlide(n) {
    showCarousel(currentSlide += n);
}

function showCarousel(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    if (n >= slides.length) { currentSlide = 0 }
    if (n < 0) { currentSlide = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
    }
    slides[currentSlide].style.display = "block";
    slides[currentSlide].classList.add("fade");
}

showCarousel(currentSlide);


function toggleMenu() {
    var x = document.getElementById("myMenu");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}
