// for main character
var x = 50;
var y = 50;
var diameter = 25;

// for obstacle 1
var squarexspeed = Math.floor(Math.random() * 10);
var squareyspeed = Math.floor(Math.random() * 10);
var squarexspeed2 = Math.floor(Math.random() * -10);
var squareyspeed2 = Math.floor(Math.random() * -10);

// create a random color at the start
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

// My Arrays
var myXs = [];
var myYs = [];
var myDiameters = [];

// canvas size
var canvasheight = 600;
var canvaswidth = 800;

// mouse clicked rectangle
var mouserectx;
var mouserecty;

function setup()
{
    createCanvas(canvaswidth,canvasheight);

    for(var i = 0; i < 5; i++)
    {
        myXs[i] = getRandomNumber(canvaswidth);
        myYs[i] = getRandomNumber(canvasheight);
        myDiameters[i] = getRandomNumber(100);
    }
}

function draw()
{
    background(200,200,200);

    fill(r,g,b);

    for(var i = 0; i < myXs.length; i++)
    {
        square(myXs[i],myYs[i],myDiameters[i]);
    }

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

// get random number
function getRandomNumber(number)
{
    return Math.floor(Math.random()*number)+10;
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
    if(x < 0 && y > height - 100)
    {

    }
    else
    {
    myXs[0] += squarexspeed;
    myYs[0] += squareyspeed;
    myXs[1] += squarexspeed2;
    myYs[1] += squareyspeed2;
    myXs[2] += squarexspeed;
    myYs[2] += squareyspeed;
    myXs[3] += squarexspeed2;
    myYs[3] += squareyspeed2;
    myXs[4] += squarexspeed;
    myYs[4] += squareyspeed;
    // obstacle 1 edge
    if (myXs[0] > canvaswidth)
    {
        myXs[0] = 0;
    }
    if (myXs[0] < 0)
    {
        myXs[0] = canvaswidth;
    }
    if (myYs[0] > canvasheight)
    {
        myYs[0] = 0;
    }
    if (myYs[0] < 0)
    {
        myYs[0] = canvasheight;
    }
    if (myXs[1] > canvaswidth)
    {
        myXs[1] = 0;
    }
    if (myXs[1] < 0)
    {
        myXs[1] = canvaswidth;
    }
    if (myYs[1] > canvasheight)
    {
        myYs[1] = 0;
    }
    if (myYs[1] < 0)
    {
        myYs[1] = canvasheight;
    }
    if (myXs[2] > canvaswidth)
    {
        myXs[2] = 0;
    }
    if (myXs[2] < 0)
    {
        myXs[2] = canvaswidth;
    }
    if (myYs[2] > canvasheight)
    {
        myYs[2] = 0;
    }
    if (myYs[2] < 0)
    {
        myYs[2] = canvasheight;
    }
    if (myXs[3] > canvaswidth)
    {
        myXs[3] = 0;
    }
    if (myXs[3] < 0)
    {
        myXs[3] = canvaswidth;
    }
    if (myYs[3] > canvasheight)
    {
        myYs[3] = 0;
    }
    if (myYs[3] < 0)
    {
        myYs[3] = canvasheight;
    }
    if (myXs[4] > canvaswidth)
    {
        myXs[4] = 0;
    }
    if (myXs[4] < 0)
    {
        myXs[4] = canvaswidth;
    }
    if (myYs[4] > canvasheight)
    {
        myYs[4] = 0;
    }
    if (myYs[4] < 0)
    {
        myYs[4] = canvasheight;
    }
    }
}