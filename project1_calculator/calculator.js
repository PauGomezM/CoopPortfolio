for (i=0; i < 16; i++){
    const key = document.querySelectorAll('.key')[i]

    key.addEventListener('click', () => {
        alert('poll')
    })
}