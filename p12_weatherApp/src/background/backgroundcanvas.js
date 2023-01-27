const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


let WIDTH = document.documentElement.clientWidth;
let HEIGHT = Math.max(document.documentElement.clientHeight, document.body.scrollHeight + 50);

canvas.width = WIDTH;
canvas.height = HEIGHT;

function randomposition(number) {
    return Math.floor(Math.random()*number);
}

function ramdomraduis(min,max){
    return Math.floor(Math.random()*(max - min) + min);
}

function draw() {
    // console.log(HEIGHT, document.body.scrollHeight);
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for(let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = i%2 == 0 ? 'rgba(255, 0, 242,0.3)' : 'rgba(255, 74, 74,0.3)';
        ctx.arc(randomposition(WIDTH), randomposition(HEIGHT), ramdomraduis(5,20), 0, 2 * Math.PI);
        ctx.fill();
    }
}

export default draw;