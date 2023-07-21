const button = document.querySelector('#button');
const colorName = document.querySelector('#colorName');
const content = document.querySelector('.content');
const letters = '123456789abcdef';

function randomNum(){
    return Math.random()* (255 - 0) + 0;
}

function determinarCor(r, g, b){
    if(r === g && g === b && r != 0){
        return 'Grey';
    }else{
        return 'Other';
    }
}


button.addEventListener('click', ()=>{
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();

    let color = `rgb(${r}, ${g}, ${b})`;

    content.style.backgroundColor = color;
    colorName.textContent = determinarCor(r, g, b);
})

