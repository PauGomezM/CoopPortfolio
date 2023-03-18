for (i=0; i<2; i++){
const pic = document.querySelectorAll('.profile_pic')[i];

    pic.addEventListener('mouseover', () => {
        pic.classList.add('stay_up');
    })

    pic.addEventListener('mouseout', () => {
            pic.classList.remove('stay_up');
    })

}