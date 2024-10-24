document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const educationSection = document.getElementById('educationSection');

    // Function to handle smooth scrolling
    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Event listener for the "Get Started" button
    getStartedBtn.addEventListener('click', function() {
        smoothScroll(educationSection);
        scrollIndicator.style.display = 'none';
    });

    // Hide scroll indicator when scrolled
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollIndicator.style.display = 'none';
        }
    });

    // Initialize Lucide icons
    lucide.createIcons();
});

