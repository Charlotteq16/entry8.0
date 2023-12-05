window.onload = function () {
    var images = document.querySelectorAll('.fade-in-out');

    function fadeInOut(index) {
        // Fade out the current image
        if (index > 0) {
            images[index - 1].classList.remove('show');
        }

        // Fade in the next image
        if (index < images.length) {
            images[index].classList.add('show');
        }

        // Move to the next image after a delay (e.g., 2000 milliseconds or 2 seconds)
        setTimeout(function () {
            fadeInOut(index + 1);
        }, 2000);
    }

    // Start the process with the first image
    fadeInOut(0);
};
