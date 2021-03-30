// for main character
var x = 50;
var y = 50;
var diameter = 25;

// for obstacle 1
var squarex = 100;
var squarey = 100;
var squarexspeed = Math.floor(Math.random() * 10);
var squareyspeed = Math.floor(Math.random() * 10);

// for obstacle 2
var ellipsex = 400;
var ellipsey = 400;
var ellipsexspeed = Math.floor(Math.random() * -10);
var ellipseyspeed = Math.floor(Math.random() * -10);

// canvas size
var canvasheight = 600;
var canvaswidth = 800;

// mouse clicked rectangle
var mouserectx;
var mouserecty;

function setup()
{
    createCanvas(canvaswidth,canvasheight);
}

function draw()
{
    // background
    background(200,200,200);

    // character
    fill(100,150,200);
    circle(x,y,diameter);

    // character instructions
    if(keyIsDown(68))
    {
        x+=5;
    }
    if(keyIsDown(65))
    {
        x-=5;
    }
    if(keyIsDown(87))
    {
        y-=5;
    }
    if(keyIsDown(83))
    {
        y+=5;
    }

    // obstacle 1
    fill(150,50,100);
    square(squarex, squarey, 50);
    // obstacle 1 movement
    squarex += squarexspeed;
    squarey += squareyspeed;
    // obstacle 1 edge
    if (squarex > canvaswidth)
    {
        squarex = 0;
    }
    if (squarex < 0)
    {
        squarex = canvaswidth;
    }
    if (squarey > canvasheight)
    {
        squarey = 0;
    }
    if (squarey < 0)
    {
        squarex = canvasheight;
    }

    // obstacle 2
    fill(50,100,150);
    ellipse(ellipsex, ellipsey, 50, 60);
    // obstacle 2 movement
    ellipsex += ellipsexspeed;
    ellipsey += ellipseyspeed;
    // obstacle 2 edge
    if (ellipsex > canvaswidth)
    {
        ellipsex = 0;
    }
    if (ellipsex < 0)
    {
        ellipsex = canvaswidth;
    }
    if (ellipsey > canvasheight)
    {
        ellipsey = 0;
    }
    if (ellipsey < 0)
    {
        ellipsey = canvasheight;
    }

    // Exit Text
    textSize(25);
    fill(220,120,150)
    text('Exit', 10, height - 50)

    // Character Exit
    if(x < 0 && y > height - 100)
    {
    textSize(50);
    fill(0,200,0);
    text('YOU WIN!', width/2, height/2)
    }
    // for mouse click rectangle
    fill(0)
    rect(mouserectx,mouserecty,50,60);
}

// place the rectangle
function mouseClicked()
{
    mouserectx = mouseX - 25;
    mouserecty = mouseY - 30;
}