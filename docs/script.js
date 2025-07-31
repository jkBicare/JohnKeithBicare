class ReferencesCarousel {
constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll('.reference-card');
    this.dots = document.querySelectorAll('.dot');
    this.playPauseBtn = document.getElementById('playPauseBtn');
    this.statusText = document.getElementById('status-text');
    this.isPlaying = true;
    this.intervalId = null;
    this.autoPlayDelay = 4000; // 4 seconds

    this.init();
}

init() {
    // Add event listeners to dots
    this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Add event listener to play/pause button
    this.playPauseBtn.addEventListener('click', () => this.toggleAutoPlay());

    // Start auto-play
    this.startAutoPlay();

    // Pause on hover
    const container = document.querySelector('.reference-container');
    container.addEventListener('mouseenter', () => this.pauseOnHover());
    container.addEventListener('mouseleave', () => this.resumeOnLeave());
}

goToSlide(index) {
    // Remove active class from current slide and dot
    this.slides[this.currentSlide].classList.remove('active');
    this.dots[this.currentSlide].classList.remove('active');

    // Update current slide
    this.currentSlide = index;

    // Add active class to new slide and dot
    this.slides[this.currentSlide].classList.add('active');
    this.dots[this.currentSlide].classList.add('active');
}

nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
}

startAutoPlay() {
    if (this.isPlaying) {
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
}

stopAutoPlay() {
    if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
}

toggleAutoPlay() {
    this.isPlaying = !this.isPlaying;
    
    if (this.isPlaying) {
        this.startAutoPlay();
        this.playPauseBtn.textContent = 'Pause';
        this.statusText.textContent = 'Auto-playing';
    } else {
        this.stopAutoPlay();
        this.playPauseBtn.textContent = 'Play';
        this.statusText.textContent = 'Paused';
    }
}

pauseOnHover() {
    if (this.isPlaying) {
        this.stopAutoPlay();
    }
}

resumeOnLeave() {
    if (this.isPlaying) {
        this.startAutoPlay();
    }
}
}

// Initialize the carousel when the page loads
document.addEventListener('DOMContentLoaded', () => {
new ReferencesCarousel();
});