let l = document.querySelector('.x');
let s = document.querySelector('.y');

let slide = document.querySelector('.slide');

l.addEventListener('click',()=>{

    slide.classList.remove('right');
    slide.classList.add('left');
    slide.style.left = "0";
    slide.style.right = "50%";
    slide.style.backgroundImage = "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)";
});

s.addEventListener('click',()=>{
    slide.classList.remove('left');
    slide.classList.add('right');
    slide.style.right = "0";
    slide.style.left = "50%";
    slide.style.backgroundImage = "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)";
});