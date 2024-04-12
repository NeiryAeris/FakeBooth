let API_KEY = 'qwWlMbm3wu9nv04PFYyQBQkc5CY87YrER8YlabV7xumreHfwdLF5QIju';

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    // Event listener for previous button
    prevBtn.addEventListener('click', function() {
      slider.scrollLeft -= slides.offsetWidth;
    });
  
    // Event listener for next button
    nextBtn.addEventListener('click', function() {
      slider.scrollLeft += slides.offsetWidth;
    });
  });
  