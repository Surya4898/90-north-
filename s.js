document.getElementById('toggleMenu').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
});

function adjustPageWidth() {
    const width = window.innerWidth;
    const body = document.body;

    if (width >= 992 && width <= 1600) {
        body.style.width = '90%';
    } else if (width >= 700 && width <= 767) {
        body.style.width = '80%';
    } else if (width >= 600 && width < 700) {
        body.style.width = '75%';
    } else if (width <= 600) {
        body.style.width = '50%';
    } else {
        body.style.width = '100%'; // Default width for larger screens
    }
}

// Adjust page width on load and on resize
window.addEventListener('load', adjustPageWidth);
window.addEventListener('resize', adjustPageWidth);