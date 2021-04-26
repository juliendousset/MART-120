// Sets Canvas Size
var canvasheight = window.innerHeight-110;
var canvaswidth = window.innerWidth-20;

// Create a random color at the start
var r = GetRandomNumber(255);
var g = GetRandomNumber(255);
var b = GetRandomNumber(255);
var r2 = 255 - GetRandomNumber(20);
var g2 = 255 - GetRandomNumber(20);
var b2 = 255 - GetRandomNumber(20);

// Variables for Pointer Location
var x = canvaswidth/10;
var y = window.innerHeight/2;
var diameter = 10;

// Create Variables for the Graph
var InitialInvestment;
var CompoundedMoney = [];
var InflationCompounded = [];
var MoneyLost = [];
CompoundedMoney[0] = 0;
InflationCompounded[0] = 0;
MoneyLost[0] = 0;
var CompoundedMoneyValue = [];
var InflationCompoundedValue = [];
var MoneyLostValue = [];
var Compounds;
var TimeHorizon;
var RectWidtht;
var InterestRate;
var RectXs = [];
RectXs [0] = 0;
var InflationRate = 0.02;
var Scale = 1;
var Middle = canvasheight-(canvasheight/3);

// For Background
var MyXs = [];
var MyYs = [];
var MyDiameters = [];
var squarexspeed = [];
var squareyspeed = [];

function setup()
{
    createCanvas(canvaswidth,canvasheight);
    
    for(var i = 0; i < 10; i++)
    {
        MyXs[i] = GetRandomNumber(canvaswidth);
        MyYs[i] = GetRandomNumber(canvasheight);
        MyDiameters[i] = GetRandomNumber(100);
    }
}

function draw()
{
    Resize();

    background(255);

    BackgroundCreation();

    CreateGraph();

    CreatePointer();

    PointerInstructions();

    PointerMovement();
}

function GetRandomNumber(number)
{
    return Math.floor(Math.random()*number);
}

function BackgroundCreation()
{
    fill(r2,g2,b2);
    for(var i = 0; i < MyXs.length; i++)
    {
        circle(MyXs[i],MyYs[i],MyDiameters[i]);
        squarexspeed[i] = Math.floor(Math.random() * 2);
        squareyspeed[i] = Math.floor(Math.random() * 2);
        // Obstacle Speed
        MyXs[i] += squarexspeed[i];
        MyYs[i] += squareyspeed[i];
        // Checks if Obstacles have hit a border and moves them to the other side
        if (MyXs[i] > window.innerWidth-20)
        {
            MyXs[i] = 0;
        }
        if (MyXs[i] < 0)
        {
            MyXs[i] = window.innerWidth-20;
        }
        if (MyYs[i] > window.innerHeight-110)
        {
            MyYs[i] = 0;
        }
        if (MyYs[i] < 0)
        {
            MyYs[i] = window.innerHeight-110;
        }
    }
}

function CompoundInterest(time)
{
    return Math.floor((InitialInvestment * (((1+ (InterestRate/Compounds)) ** (Compounds * time)))));
}

function CompoundInterestInflation(time)
{
    return Math.floor((InitialInvestment * (((1+ ((InterestRate-InflationRate)/Compounds)) ** (Compounds * time)))));
}

function Inflation(time)
{
    return Math.floor((InitialInvestment * (((1- (InflationRate/Compounds)) ** (Compounds * time)))));
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
            CompoundedMoney[i] = Math.floor((CompoundInterest(i) - InitialInvestment) * Scale);
            InflationCompounded[i] = Math.floor((CompoundInterestInflation(i) - InitialInvestment) * Scale);
            MoneyLost[i] = Math.floor((Inflation(i) - InitialInvestment) * Scale);
            CompoundedMoneyValue[i] = CompoundInterest(i);
            InflationCompoundedValue[i] = CompoundInterestInflation(i);
            MoneyLostValue[i] = Inflation(i);
            // Input Compounded Graphed
            fill(r,g,b);
            rect(RectXs[i], Middle-CompoundedMoney[i], RectWidth, CompoundedMoney[i]);
            text(CompoundedMoneyValue[i], RectXs[i], (Middle - CompoundedMoney[i]) - 5);
            // Lost to Inflation
            fill(50);
            rect(RectXs[i], Middle-MoneyLost[i], RectWidth, MoneyLost[i]);
            text(MoneyLostValue[i], RectXs[i], (Middle - MoneyLost[i]) + 15);
            // Adjusted For Inflation
            fill(b,r,g);
            rect(RectXs[i], Middle-InflationCompounded[i], RectWidth, InflationCompounded[i]);
            text(InflationCompoundedValue[i], RectXs[i], (Middle - InflationCompounded[i]) - 5);
            // Initial Investment Rectangle
            fill(50);
            rect(RectXs[0], Middle-CompoundedMoney[0], RectWidth, CompoundedMoney[0]);
            text(CompoundedMoneyValue[0], RectXs[0], (Middle - CompoundedMoney[0]) - 5);
            // Text to say what year it is
            fill(0);
            text(i, RectXs[i], (window.innerHeight-110) - 10);
            text(0, 0, canvasheight - 10);
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
    fill(50);
    text("Value Lost to Inflation", 0, 20);
    fill(b,r,g);
    text("Compounded Money Value Adjusted for 2% Inflation", 0, 40);
    fill(r,g,b);
    text("Compounded Money", 0, 60);
}

function PointerMovement()
{
    fill(g,b,r);
    text("Change: " + Math.floor((Middle - y) /  Scale), x - 40, y + 25);

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