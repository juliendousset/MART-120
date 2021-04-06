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
    background(200,200,200);

    //functions
    Border();

    CreateCharacter();

    CharacterMovement();

    Obstacles();

    CharacterExit();

    // for mouse click rectangle
    fill(0)
    rect(mouserectx,mouserecty,50,60);
}

// for border
function Border()
{
    fill(0);
    rect(0,0,canvaswidth,10);
    rect(0,0, 10, canvasheight-100);
    rect(0,canvasheight-10,canvaswidth,10);
    rect(canvaswidth-10,0,10,canvasheight);
}

// place the rectangle
function mouseClicked()
{
    mouserectx = mouseX - 25;
    mouserecty = mouseY - 30;
}

// create character
function CreateCharacter()
{
    fill(100,150,200);
    circle(x,y,diameter);
}


// character exit
function CharacterExit()
{
    // Exit Text
    textSize(25);
    fill(220,120,150)
    text('Exit', 10, height - 50)
    if(x < 0 && y > height - 100)
    {
        textSize(50);
        fill(0,200,0);
        text('YOU WIN!', width/2-120, height/2)
    }
}

// character controls
function CharacterMovement()
{
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
}

// create obstacles
function Obstacles()
{
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
}