/* ---- hover pictures ----  By changing opacity to be 0 by default, and adding class show
instead of hide, we can avoid the dialogue boxes appearing every time the page reloads*/ 
for (i=0; i<2; i++){
    const pic = document.querySelectorAll('.profile_pic')[i];
    const dialogue_box = document.querySelectorAll('.dialogue_box')[i]


    pic.addEventListener('mouseover', () => {
        pic.classList.add('stay_up');
        dialogue_box.classList.toggle('shown');
    })

    pic.addEventListener('mouseout', () => {
        pic.classList.remove('stay_up');
        setTimeout(toggleShown, 300)
    })

    function toggleShown(){
        dialogue_box.classList.toggle('shown');
    }
}

/* ---- Scroll window smoothly ---- */

const navbarHome = document.querySelectorAll('.navbar-links a')[0];

navbarHome.addEventListener('click', (event) => {
    event.preventDefault(); //list element href is set to top (#), hence we prevent default behaviour
    window.scrollTo({ top: 100, behavior: 'smooth' });
});

const navbarProjects = document.querySelectorAll('.navbar-links a')[1];

navbarProjects.addEventListener('click', (event) => {
    event.preventDefault(); //list element href is set to top (#), hence we prevent default behaviour
    window.scrollTo({ top: 1100, behavior: 'smooth' });
});

const navbarAbout = document.querySelectorAll('.navbar-links a')[2];

navbarAbout.addEventListener('click', (event) => {
    event.preventDefault(); //list element href is set to top (#), hence we prevent default behaviour
    window.scrollTo({ top: 1500, behavior: 'smooth' });
});

const arrowPadding = document.querySelector('.arrow-padding');

arrowPadding.addEventListener('click', () => {
    setTimeout(scrollToProjects, 100)
});

function scrollToProjects(){
    window.scrollTo({ top: 1100, behavior: 'smooth' });
}