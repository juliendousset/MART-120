// Sets Canvas Size
var canvasheight = 10000;
var canvaswidth = window.innerWidth-30;

// Create a random color at the start
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

// Variables for Pointer Location
var x = canvaswidth/10;
var y = window.innerHeight/2;
var diameter = 10;

// Create Variables for the Graph
var InitialInvestment;
var CompoundedMoney = [];
var InflationCompounded = [];
var MoneyLost = [];
var Compounds;
var TimeHorizon;
var RectWidtht;
var InterestRate;
var RectXs = [];
RectXs [0] = 0;
var InflationRate = 0.02;

function setup()
{
    createCanvas(canvaswidth,canvasheight);
}

function draw()
{
    background(150,150,150);

    CreateGraph();

    CreatePointer();

    PointerInstructions();

    PointerMovement();
}

function CreateGraph()
{
    if (InitialInvestment != "", Compounds != "", TimeHorizon != "", InterestRate != "")
    {
    // Creates the Graph
        for(var i = 1; i < TimeHorizon; i++)
        {
            // Determine the Xs of the Rectangles
            RectXs[i] = RectXs[i-1] + RectWidth;
            // Money Compounded
            CompoundedMoney[i] = Math.floor((InitialInvestment * (((1+ (InterestRate/Compounds)) ** (Compounds * i)))));
            InflationCompounded[i] = Math.floor((InitialInvestment * (((1+ ((InterestRate-InflationRate)/Compounds)) ** (Compounds * i)))));
            MoneyLost[i] = Math.floor((InitialInvestment * (((1- (InflationRate/Compounds)) ** (Compounds * i)))));
            // Input Compounded Graphed
            fill(r,g,b);
            rect(RectXs[i], 0, RectWidth, CompoundedMoney[i]);
            text(CompoundedMoney[i], RectXs[i],CompoundedMoney[i] + 20);
            // Adjusted For Inflation
            fill(b,r,g);
            rect(RectXs[i], 0, RectWidth, InflationCompounded[i]);
            text(InflationCompounded[i], RectXs[i],InflationCompounded[i] + 20);
            // Lost to Inflation
            fill(0);
            rect(RectXs[i], 0, RectWidth, MoneyLost[i]);
            text(MoneyLost[i], RectXs[i], MoneyLost[i] + 20);
            // Initial Investment Rectangle
            rect(RectXs[0], 0, RectWidth, CompoundedMoney[0]);
            text(InitialInvestment, 20, InitialInvestment + 20);
        }
    }
}

function CreatePointer()
{
    fill(g,b,r);
    circle(x,y,diameter);
    textSize(30);
}

function PointerInstructions()
{
    textSize(15);
    fill(255);
    text("Value Lost to Inflation", 15, 25);
    fill(b,r,g);
    text("Compounded Money Value Adjusted for 2% Inflation", 15, 45);
    fill(r,g,b);
    text("Compounded Money", 15, 65);
    fill(g,b,r);
    text("Every PIXEL down represents 1 DOLLAR to show the power of Compound Interest", 15, 85);
}

function PointerMovement()
{
    text("Amount:" + Math.floor(y), x - 40, y + 25);

    // Regular WASD
    if(keyIsDown(68))
    {
        x+=10;
    }
    if(keyIsDown(65))
    {
        x-=10;
    }
    if(keyIsDown(87))
    {
        y-=10;
    }
    if(keyIsDown(83))
    {
        y+=10;
    }

    // Checks to make sure pointer is not out of bounds
    if (x > canvaswidth)
    {
        x = 0;
    }
    if (x < 0)
    {
        x = canvaswidth;
    }
    if (y > canvasheight)
    {
        y = 0;
    }
    if (y < 0)
    {
        y = canvasheight;
    }
}

// Move the pointer to the position where the mouse was clicked
function mouseClicked()
{
    x = mouseX;
    y = mouseY;
}