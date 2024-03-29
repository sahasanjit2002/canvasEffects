const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
var particleArray = [];
//mouse events
let mouse = {
  x: undefined,
  y: undefined
}
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});


//particle class
class Particle{
    constructor(){
        // this.x = mouse.x;
        this.x = Math.random() * canvas.width + 1;
        // this.y = mouse.y;
        this.y = Math.random() * canvas.height + 1;
        this.radius = Math.random() * 25 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'white';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.radius > 1) this.radius -= 0.1;
        // if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
        //     this.speedX = -this.speedX;
        // }
        // if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
        //     this.speedY = -this.speedY;
        // }
    }
    draw(){
        c.beginPath();
        
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}


//draw event 
var init = ()=>{
    for (let i = 0; i < 100; i++) {
        particleArray.push(new Particle());
        
    }
    console.log(particleArray)
}
init()
function handleParticles(){
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        if(particleArray[i].radius <= 0.3){
            particleArray.splice(i, 1);
            i--;
        }
    }
}

//animate function
function animate(){
    c.fillStyle = 'rgba(0, 0, 0, 0.18)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate();