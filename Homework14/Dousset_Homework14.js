// for main character
var x = 50;
var y = 50;
var diameter = 25;

// Speed for the Obstacles
var squarexspeed = [];
var squareyspeed = [];

// create a random color at the start
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

// My Arrays
var myXs = [];
var myYs = [];
var myDiameters = [];

// canvas size
var canvasheight = 800;
var canvaswidth = 1850;

// mouse clicked rectangle
var mouserectx;
var mouserecty;

// Circle Monsters
var CircleMonster;
var BigCircleMonster;
var SmallCircleMonster;

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

    // Creates Circle Monsters
    CreateCircleMonster();

    // Create Borders
    Border();

    // Create Main Character
    CreateCharacter();

    // Controls for the Main Character
    CharacterMovement();
    
    // Creates the Obstacles
    CreateObstacles();

    // Controls the Obstacles
    ObstacleMovement();

    // Character Exit
    CharacterExit();
    
    // Create Mouse Clicked Rectangle
    CreateMouseClickedRect();
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

function CreateCircleMonster()
{
    // Create Circle Monsters
    CircleMonster = new Circle(canvaswidth/2,canvasheight/3,50,r,g,150);
    BigCircleMonster = new Circle(canvaswidth/4,300,150,100,150,0);
    SmallCircleMonster = new Circle(150,200,25,50,g,b);
    // Display Circle Monsters
    CircleMonster.display();
    BigCircleMonster.display();
    SmallCircleMonster.display();
}

// get random number
function getRandomNumber(number)
{
    return Math.floor(Math.random()*number)+10;
}

// Place the Mouse Clicked Rectangle
function CreateMouseClickedRect()
{
    fill(0)
    rect(mouserectx,mouserecty,50,60);
}

// Get the location for the Mouse Clicked Rectangle
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
    // Checks if Main Character has Reached the Exit
    if(x < 0 && y > height - 100)
    {
        textSize(50);
        fill(150,30,60);
        text('YOU WIN!', width/2-120, height/2)
    }
}

// main character controls
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

// Controls the Movement of Obstacles
function CreateObstacles()
{
    fill(r,g,b);
    for(var i = 0; i < myXs.length; i++)
    {
        square(myXs[i],myYs[i],myDiameters[i]);
        squarexspeed[i] = Math.floor(Math.random() * 10);
        squareyspeed[i] = Math.floor(Math.random() * 10);
    }
}

function ObstacleMovement()
{
    // If statement is to stop all Obstacles when the main character reaches the Exit
    if(x < 0 && y > height - 100)
    {

    }
    else
    {
        for(var i = 0; i < myXs.length; i++)
        {
        // Obstacle Speed
        myXs[i] += squarexspeed[i];
        myYs[i] += squareyspeed[i];

        // Checks if Obstacles have hit a border and moves them to the other side
        if (myXs[i] > canvaswidth)
        {
            myXs[i] = 0;
        }
        if (myXs[i] < 0)
        {
            myXs[i] = canvaswidth;
        }
        if (myYs[i] > canvasheight)
        {
            myYs[i] = 0;
        }
        if (myYs[i] < 0)
        {
            myYs[i] = canvasheight;
        }
        }
    }
}