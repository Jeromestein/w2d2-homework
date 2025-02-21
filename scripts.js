document.addEventListener('DOMContentLoaded', function() {
    const navbarToggles = document.querySelectorAll('.navbar-toggle');
    
    navbarToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const mainMenu = document.querySelector('.main-menu');
            if(mainMenu) {
                mainMenu.classList.toggle('show');
            }
        });
    });
}); 