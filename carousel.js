document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const indicators = document.querySelectorAll('.indicator');
  
  let currentIndex = 0;
  
  // Move to slide function
  const moveToSlide = (index) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    
    // Update current slide class
    slides.forEach((slide, i) => {
      slide.classList.toggle('current-slide', i === index);
    });
    
    // Update indicators
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
  };
  
  // Next slide
  nextButton.addEventListener('click', e => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  });
  
  // Previous slide
  prevButton.addEventListener('click', e => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
  });
  
  // Indicator click
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', e => {
      currentIndex = index;
      moveToSlide(currentIndex);
    });
  });
  
  // Auto-play disabled
  
  // Handle window resize
  window.addEventListener('resize', () => {
    moveToSlide(currentIndex);
  });
});
