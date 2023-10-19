// SCROLLING PAGE
var scroll = 0;
var conponent = document.querySelector('.container.index-container');
var windowHeight = window.innerHeight;
document.addEventListener('scroll',()=>{
    scroll = window.scrollY;
    if(scroll >= 0 && scroll < windowHeight){
        conponent.classList.remove();
        conponent.className = 'container index-container';
        conponent.classList.add('slide1');
    }
    else if(scroll >= windowHeight && scroll < 2*windowHeight){
        conponent.classList.remove();
        conponent.className = 'container index-container';

        conponent.classList.add('slide2');
    }
    else if(scroll >= 2*windowHeight && scroll < 3*windowHeight){
        conponent.classList.remove();
        conponent.className = 'container index-container';
        conponent.classList.add('slide3');
    }
    else if(scroll >= 3*windowHeight && scroll < 4*windowHeight){
        conponent.classList.remove();
        conponent.className = 'container index-container';
        conponent.classList.add('slide4');
    }
    else if(scroll >= 4*windowHeight && scroll < 5*windowHeight){
        conponent.classList.remove();
        conponent.className = 'container index-container';

        conponent.classList.add('slide5');
    }
    else if(scroll >= 5*windowHeight && scroll < 6*windowHeight){
        conponent.classList.remove();
        conponent.className = 'container index-container';
        conponent.classList.add('slide6');
    }
})