const hamburgerToggle = document.getElementById('menu-toggle');


function mobileNavToggle() {
    if (hamburgerToggle.dataset.active === 'true') {
        hamburgerToggle.dataset.active = 'false';
    } else {
        hamburgerToggle.dataset.active = 'true';
    } 
};

document.querySelector('.menu-toggle-icon').addEventListener('click', mobileNavToggle);