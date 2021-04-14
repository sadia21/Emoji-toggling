
// slection
const happyface = document.querySelector('.happy');
const angryface = document.querySelector('.angry');
happyface.addEventListener('click', () => {
    if(angryface.classList.contains('angry')){
        angryface.classList.add('active');
        happyface.classList.remove('active');
    }
});
angryface.addEventListener('click', () => {
    if(happyface.classList.contains('happy')){
        happyface.classList.add('active');
        angryface.classList.remove('active');
    }
});

