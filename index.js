
/*
for (i=0; i<2; i++){
    const pic = document.querySelectorAll('.profile_pic')[i];
    const dialogue_box = document.querySelectorAll('.dialogue_box')[i]
    
        dialogue_box.style.visibility = 'hidden';
    
        pic.addEventListener('mouseover', () => {
            pic.classList.add('stay_up');
            dialogue_box.style.visibility = 'visible';
            dialogue_box.classList.toggle('hidden');
        })

        pic.addEventListener('mouseout', () => {
            pic.classList.remove('stay_up');
            dialogue_box.style.visibility = 'hidden';
        })
    }
*/

for (i=0; i<2; i++){
    const pic = document.querySelectorAll('.profile_pic')[i];
    const dialogue_box = document.querySelectorAll('.dialogue_box')[i]
    
        dialogue_box.classList.toggle('hidden');

        pic.addEventListener('mouseover', () => {
            pic.classList.add('stay_up');
            dialogue_box.classList.toggle('hidden');
        })

        pic.addEventListener('mouseout', () => {
            pic.classList.remove('stay_up');
            dialogue_box.classList.toggle('hidden');
        })
    }

    const home_button = document.querySelector('.navbar-links');
    home_button.addEventListener('mouseover', scrollFunc)

    function scrollFunc(){
        window.scrollTo(0, 1200);
    }
