var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d")

//cargar imagenes

var bird = new Image();
var bg = new Image();
var gd = new Image();
var top_pipe = new Image();
var bottom_pipe = new Image();

bird.src = "./images/flappy-bird.png";
bg.src= "./images/background.png";
gd.src = "./images/ground.png";
top_pipe.src = "./images/top_pipe.png";
bottom_pipe.src = "./images/bottom_pipe.png";

//algunas variables

var gap = 85;
var constant = 242 + gap;
var bX = 10;
var bY=150;
var gravedad = 1.5;
var score= 0;

var bird_width = 41;
var bird_height = 31;
var pipe_width = 52;
var pipe_height = 242;
var ground_height = 118;

// función de flecha

function moveUp(){
    bY -= 30;
}

//coordenadas de la tubería

var tuberia = [];
tuberia[0] = {
    x: cvs.width,
    y: -2
}

//dibujar imagenes


function draw(){
    ctx.drawImage(bg,0,0);

    for (var i= 0; i<tuberia.length; i++){
        ctx.drawImage(top_pipe, tuberia[i].x, tuberia[i].y);
        ctx.drawImage(bottom_pipe, tuberia[i].x, tuberia[i].y+constant);

        tuberia[i].x--; //desplazamiento hacia la izquierda

        if (tuberia[i].x==125){
            tuberia.push({
                x: cvs.width,
                //y: Math.floor(Math.random()*(242-gap+1)) - gap
                y: Math.floor(Math.random()*pipe_height) - pipe_height
            });
        }

        //Detectar colision
        if (bX + bird_width >= tuberia[i].x && bX<=tuberia[i].x + pipe_width 
            && (bY<=tuberia[i].y + pipe_height || bY+ bird_height>=tuberia[i].y + constant)
                ||bY + bird_height >= cvs.height - ground_height){
                location.reload(); //recargar página
            }
        if (tuberia[i].x==5){
            score++;
        }
    }
    
    ctx.drawImage(gd,0,cvs.height-gd.height);
    ctx.drawImage(bird,bX,bY);

    bY += gravedad;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score: "+score,10, cvs.height -28);

    requestAnimationFrame(draw);
}

document.addEventListener("DOMContentLoaded", draw());
document.addEventListener("keydown", moveUp);
