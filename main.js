let API_KEY = 'qwWlMbm3wu9nv04PFYyQBQkc5CY87YrER8YlabV7xumreHfwdLF5QIju';

let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;

    function showSlides() {
        slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = slides.children.length - 1;
        } else if (slideIndex >= slides.children.length) {
            slideIndex = 0;
        }
        showSlides();
    }

    showSlides(); // Show initial slide

    // Optional: Auto slide
    // let slideInterval = setInterval(() => plusSlides(1), 3000);
  