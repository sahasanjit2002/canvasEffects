const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
var particleArray = [];
let hue = 0;
//mouse events
let mouse = {
  x: undefined,
  y: undefined
}
window.addEventListener('click', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particleArray.push(new Particle());
        
    }
});
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particleArray.push(new Particle());
        
    }
});



//particle class
class Particle{
    constructor(){
        this.x = mouse.x;
        // this.x = Math.random() * canvas.width + 1;
        this.y = mouse.y;
        // this.y = Math.random() * canvas.height + 1;
        this.radius = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl('+hue+',100%,50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.radius > 0.2) this.radius -= 0.1;
    }
    draw(){
        c.beginPath();
        
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}


//draw event 
function handleParticles(){
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        for(j=0;j<particleArray.length;j++){
            const dx = particleArray[i].x - particleArray[j].x
            const dy = particleArray[i].y - particleArray[j].y
            const distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < 200){
                c.beginPath();
                c.strokeStyle = particleArray[i].color;
                c.lineWidth = 0.1;
                c.moveTo(particleArray[i].x, particleArray[i].y);
                c.lineTo(particleArray[j].x, particleArray[j].y);
                c.stroke();
                c.closePath();
            }
        }
        if(particleArray[i].radius <= 0.3){
            particleArray.splice(i, 1);
            i--;
        }
    }
}

//animate function
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    // c.fillStyle = 'rgba(0, 0, 0, 0.05)';
    // c.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue += 0.1;
    requestAnimationFrame(animate);
}
animate();
