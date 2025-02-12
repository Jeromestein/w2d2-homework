document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const mainMenu = document.querySelector('.main-menu');

    navbarToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('show');
    });
}); 