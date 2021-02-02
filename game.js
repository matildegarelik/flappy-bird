var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d")

//cargar imagenes

var bird = new Image();
var bg = new Image();
var gd = new Image();
var top_pipe = new Image();
var bottom_pipe = new Image();

bird.src = "./images/bird.png";
bg.src= "./images/background.png";
gd.src = "./images/ground.png";
top_pipe.src = "./images/top_pipe.png";
bottom_pipe.src = "./images/bottom_pipe.png";

//algunas variables

var gap = 85;
var constant = 242 + gap;
var bX = 10;
var bY=150;
var gravedad = 1;

//dibujar imagenes

console.log(cvs.height)
console.log(gd.height)

function draw(){
    ctx.drawImage(bg,0,0);
    ctx.drawImage(top_pipe, 100, 0);
    ctx.drawImage(bottom_pipe, 100, constant);
    ctx.drawImage(gd,0,cvs.height-gd.height);
    ctx.drawImage(bird,bX,bY);

    bY += gravedad;

    requestAnimationFrame(draw);
}

document.addEventListener("DOMContentLoaded", draw());
