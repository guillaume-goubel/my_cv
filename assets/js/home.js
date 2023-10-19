import { Modal } from 'bootstrap';

window.addEventListener('DOMContentLoaded', event => {

    // COLLAPSE NAVBAR ON SCROLL
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
    if (theme === 'dark' || theme === null) {
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
for (let i = 0; i < projectCards.length; i++) {
    
    projectCards[i].addEventListener("click", function () {
                
        const data = {
            projectId: this.getAttribute('data-id'),
        };

        const url = document.getElementById('project-infos-AJAX').getAttribute('data-url');
  
        // Configuration de la requête
        let options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data),
        };
  
        // Effectuer l'appel AJAX avec fetch
        fetch(url, options)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('La réponse du serveur n\'est pas OK');
                }
            return response.json();
            })
            .then(function(data) {

                feedInfosModal(data);
                
                // let modal = new Modal(document.getElementById('projectModal'), {
                //     keyboard: false
                // });

                // let title = document.getElementById('projectModalLabel');
                // title.innerHTML = '';
                // title.innerHTML = data.title;
                
                // let container = document.getElementById('project-infos-content');
                // container.innerHTML = '';
                // container.innerHTML = data.content;

                // modal.show();

            })
            .catch(function(error) {
                console.error('Une erreur s\'est produite :', error);
            });
        
    });
}
// convert ES6
function feedInfosModal(data) {

    let modal = new Modal(document.getElementById('projectModal'), {
        keyboard: false
    });

    let title = document.getElementById('projectModalLabel');
    title.innerHTML = '';
    title.innerHTML = data.title;
    
    let container = document.getElementById('project-infos-content');
    container.innerHTML = '';
    container.innerHTML = data.content;

    modal.show();
}