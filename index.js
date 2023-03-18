/*
for (var i = 0; i<2; i++){
    document.querySelectorAll('.profile_pic')[i].addEventListener('mouseover', picHover)
}


function picHover() {
    
}

*/

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
/*
pic.addEventListener('animationend', () => {
    if (state == 0){
        pic.classList.add('stay_up');
        pic.classList.remove('play_up');
        state = 1
    }

    if (state == 1){
        pic.classList.remove('play_down')
        pic.classList.add('stay_down')
        state = 0
    }    
})

/*
pic.addEventListener('animationend', () => {
    if (state == 1){
        pic.classList.remove('play_down')
        pic.classList.add('stay_down')
        state = 0
    }
})
*/
/******************When click Aleix*********************************/