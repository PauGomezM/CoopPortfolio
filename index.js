const pic = document.querySelector('.profile_pic');


pic.addEventListener('mouseover', () => {
    pic.classList.add('stay_up');
})

pic.addEventListener('mouseout', () => {
        pic.classList.remove('stay_up');
})

const pic2 = document.querySelectorAll('.profile_pic')[1];

pic2.addEventListener('mouseover', () => {
    pic2.classList.add('stay_up');
})

pic2.addEventListener('mouseout', () => {
        pic2.classList.remove('stay_up');
})