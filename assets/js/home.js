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

    // SET DARK/LIGHT THEME
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.getElementById('theme-choice').checked = true;
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }else{
        document.getElementById('theme-choice').checked = false;
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }

});

// ABOUT COMPLEMENT
document.getElementById("about-complement-dot").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById('about-complement-container').classList.toggle('hidden');
});

// LANGUAGE CHOICE
document.getElementById("language-choice-select").addEventListener("change", (event) => {
    event.preventDefault();
    const path = event.target.value;
    window.location.href = path;
});

// THEME DARK/LIGHT SWITCHER
document.getElementById("theme-choice").addEventListener("change", (event) => {
    
    event.preventDefault();

    // if this is checked
    if (event.target.checked) {       
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }

});


// PROJECT ABSTRACT
document.getElementById("project-abstract-menu").addEventListener("click", (event) => {
    document.getElementById('project-abstract-container').classList.remove('hidden');
    document.getElementById('project-abstract-container').scrollIntoView();
});

let navItem = document.getElementsByClassName("nav-item");
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
                
        if (!this.attributes.id) {
            document.getElementById('project-abstract-container').classList.add('hidden');
        }

    });
}

// PROJECT MODAL
const projectCards = document.getElementsByClassName("project-card");
console.log(projectCards);

for (let i = 0; i < projectCards.length; i++) {
    projectCards[i].addEventListener("click", function () {
                
        let projectId = this.getAttribute('data-id');

    });
}

