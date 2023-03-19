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
        dialogue_box.classList.toggle('shown');
    })

}

/* ---- Scroll window smoothly ---- */
const home_button = document.querySelector('.navbar-links');
home_button.addEventListener('mouseover', scrollFunc)

function scrollFunc(){
    window.scrollTo(0, 1200);
}

/*
var el = document.querySelector('.dialogue_box');
el.style.display = "none";
*/