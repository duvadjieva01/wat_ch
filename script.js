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
        slides[i].classList.remove("fade");  // remove fade effect
    }
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("fade"); // add fade effect
}

// Start the first slide
showSlides(slideIndex);


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


let slideeIndex = 0;
showSlides(slideeIndex);

function changeSlide(n) {
    showSlides(slideeIndex += n);
}

function showSlides(n) {
    const slidees = document.getElementsByClassName("slidee");
    if (n >= slidees.length) { slideeIndex = 0 }
    if (n < 0) { slideIndex = slidees.length - 1 }
    for (let i = 0; i < slidees.length; i++) {
        slidees[i].style.display = "none";
        slidees[i].classList.remove("fadee");  // remove fade effect
    }
    slidees[slideeIndex].style.display = "block";
    slidees[slideeIndex].classList.add("fadee"); // add fade effect
}

// Start the first slide
showSlides(slideeIndex);