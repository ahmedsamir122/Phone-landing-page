const up = document.querySelector('.up');
const down = document.querySelector('.down');
const circle = document.querySelector('.cir');
let r= 0;

up.addEventListener('click', (e) => {
    r += 90;
    circle.style.transform= `rotate(${r}deg)`
})
down.addEventListener('click', (e) => {
    r -= 90;
    circle.style.transform= `rotate(${r}deg)`
})



