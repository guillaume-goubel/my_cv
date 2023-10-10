window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById('more-infos-container').addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById('project-abstract').classList.toggle('hidden');
});

document.getElementById("about-complement-dot").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById('about-complement-container').classList.toggle('hidden');
});

// window.toggleProjectAbstract = (event) => {
//     event.preventDefault();
//     document.getElementById('project-abstract').classList.toggle('hidden');
// }