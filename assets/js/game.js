// IMPORT
import * as global from '../global/functions/global.js';

// GLOBAL VARIABLES
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var gameSpeed = 8;

// EVENT LISTENERS
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// BALLE VARIABLES
var x = canvas.width / 2;
var y = canvas.height - 30;

// random direction for x
const xValueArray = [-2,-1, 1, 2];
var dx = getRandomItem(xValueArray);

var dy = -2;
var color = "#0095DD";
var ballRadius = 10;

// RAQUETTE VARIABLES
var paddleHeight = 10;
var paddleWidth = 135;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleMouvement = 7;

// GESTION DES TOUCHES
var rightPressed = false;
var leftPressed = false;

// DECOUVERTE DES LETTRES ?
const hiddenWord = 'LILLE';
var counterLetter = 0;
   
document.getElementById("left-button").addEventListener("click", (event) => {
    
    event.preventDefault();

    rightPressed = false;
    leftPressed = true; 

    setTimeout(() => {
        leftPressed = false;
        }, 110);


});

document.getElementById("right-button").addEventListener("click", (event) => {
    
    event.preventDefault();

    leftPressed = false;
    rightPressed = true;

    setTimeout(() => {
        rightPressed = false;
        }, 110);
});

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#FFF";
    ctx.fill();
    ctx.closePath();
}

function changeColor() {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function keyDownHandler(e) {
    
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    
}
  
function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function discoverLetter(){
    
    let wordArray = hiddenWord.split('');

    if (counterLetter == wordArray.length - 1) {
        alert("GAGNE - vous savez tout de moi désormais");
        clearInterval(gameInterval);
        
        setTimeout(() => {
            document.location.reload();
        }, 4000);

    }

    // find the element
    let idElmtString = `letter-${counterLetter}`;
    let element = document.getElementById(idElmtString);
    element.textContent = wordArray[counterLetter];

    counterLetter ++;

}

// MAIN FUNCTION
function draw() {
    
    // CLEAR ALL THE CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // DRAW ELEMENTS
    drawPaddle();
    drawBall();
    
    // BALL MOVEMENT
    if (y + dy < 0) {
        dy = -dy;
        changeColor();
    }else if(y + dy > canvas.height - ballRadius){   
        if (x > paddleX && x < paddleX + paddleWidth) {
            discoverLetter();
            dy = -dy;
        } else {
            alert("PERDU - mon lieu de naissance restera un mystère ...");
            clearInterval(gameInterval);
            document.location.reload();
        }
    }

    if (x + dx < 0 || x + dx > canvas.width - ballRadius) {
        dx = -dx;
        changeColor();
    }
    x += dx;
    y += dy;

    // PADDLE MOVEMENT
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += paddleMouvement;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= paddleMouvement;
    }

}

window.addEventListener('DOMContentLoaded', event => {
    prompt("A vous de découvrir mon lieu de naissance !!");
});

var gameInterval = setInterval(draw, gameSpeed);