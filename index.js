for (i=0; i<2; i++){
const pic = document.querySelectorAll('.profile_pic')[i];
const dialogue_box = document.querySelectorAll('.dialogue_box')[i]

    dialogue_box.style.visibility = 'hidden';

    pic.addEventListener('mouseover', () => {
        pic.classList.add('stay_up');
        dialogue_box.style.visibility = 'visible';
    })

    pic.addEventListener('mouseout', () => {
        pic.classList.remove('stay_up');
        dialogue_box.style.visibility = 'hidden';
    })
}




