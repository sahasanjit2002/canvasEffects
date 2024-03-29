var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 200;
var c = canvas.getContext('2d');
var targetElement = window;
currentColor = "black";
var black = document.getElementById("black");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var currentStatus = document.getElementById("currentStatus");

black.addEventListener("click",()=>{
    currentColor = "black";
    flag2 = true;
})
red.addEventListener("click",()=>{
    currentColor = "red";
    flag2 = true;
}
)
green.addEventListener("click",()=>{
    currentColor = "green";
    flag2 = true;
})
blue.addEventListener("click",()=>{
    currentColor = "blue";
    flag2 = true;
}
)
handleMouseMove = (event) => {
    if(flag2){
        x = event.clientX;
        y = event.clientY;
        animateCircle(x, y);
        drawLine(x, y);
        while(flag){
            prevPos[0] = x;
            prevPos[1] = y;
            flag = false;
        }
}
else{
}
}
flag = true;
var prevPos =[]
updateStart = (x,y) => {
    while(flag){
        
    }
}
animateCircle = (x,y) => {
    c.beginPath();
    
    c.arc(x, y, 0, 0, Math.PI * 2, false);
    c.strokeStyle = currentColor;
    c.stroke();
}
drawLine = (x1,y1)=>{
    c.moveTo(prevPos[0], prevPos[1]);
    c.lineTo(x1, y1);
    c.strokeStyle = currentColor;
    c.stroke();
    prevPos = [x1, y1];
}
flag2 = false;
targetElement.addEventListener("click",(event)=>{flag2=!flag2
    prevPos = [event.clientX, event.clientY];
    if(flag2){
        currentStatus.innerHTML = "Drawing";
    }
    else{
        currentStatus.innerHTML = "Not Drawing";
    }
})
targetElement.addEventListener("mousemove", handleMouseMove);
