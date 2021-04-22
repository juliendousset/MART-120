// Canvas size
var canvasheight = 10000;
var canvaswidth = window.innerWidth-20;

// Create a random color at the start
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

// For pointer
var x = canvaswidth/10;
var y = window.innerHeight/2;
var diameter = 25;

// for Graph
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
    background(200,200,200);

    // Create the graph
    Graph();

    // Create pointer
    CreatePointer();

    // Instructions
    Instructions();

    // Controls for pointer
    PointerMovement();
}

// Sets values once the form is submitted
function checkForm()
{
    // Initial Investment Variables
    InitialInvestment = document.getElementById("IV").value;
    InflationCompounded [0] = InitialInvestment;
    CompoundedMoney [0] = InitialInvestment;
    MoneyLost [0] = InitialInvestment;

    // Compound Variable
    Compounds = document.getElementById("C").value;

    // Time Horizon Variables
    TimeHorizon = document.getElementById("TH").value;
    RectWidth = (window.innerWidth-20)/TimeHorizon

    // Interest Rate Variables
    InterestRate = document.getElementById("IR").value/100;

    // Check to Make sure all Text Boxes are Filled out
    if(InitialInvestment == "")
    {
        document.getElementById("IV").style.backgroundColor ="red";
        document.getElementById("IV").focus();
        window.alert("Initial Investment is Required");
    }
    else
    {
        document.getElementById("IV").style.backgroundColor ="white";
    }
    if(Compounds == "")
    {
        document.getElementById("C").style.backgroundColor ="red";
        document.getElementById("C").focus();
        window.alert("Amount of times the investment is Compounded is Required");
    }
    else
    {
        document.getElementById("C").style.backgroundColor ="white";
    }
    if(TimeHorizon == "")
    {
        document.getElementById("TH").style.backgroundColor ="red";
        document.getElementById("TH").focus();
        window.alert("Time Horizon is Required");
    }
    else
    {
        document.getElementById("TH").style.backgroundColor ="white";
    }
    if(InterestRate == "")
    {
        document.getElementById("IR").style.backgroundColor ="red";
        document.getElementById("IR").focus();
        window.alert("Interest Rate is Required");
    }
    else
    {
        document.getElementById("IR").style.backgroundColor ="white";
    }
}

// Draws the Graph
function Graph()
// Checks that every box is filled out before drawing graph
{
if (InitialInvestment != "", Compounds != "", TimeHorizon != "", InterestRate != "")
{
// Creates the Graph
    for(var i = 1; i < TimeHorizon; i++)
    {
        // Determine the Xs of the Rectangles
        RectXs[i] = RectXs[i-1] + RectWidth;
        // Money Compounded
        CompoundedMoney[i] = (InitialInvestment * (((1+ (InterestRate/Compounds)) ** (Compounds * i))));
        InflationCompounded[i] = (InitialInvestment * (((1+ ((InterestRate-InflationRate)/Compounds)) ** (Compounds * i))));
        MoneyLost[i] = (InitialInvestment * (((1- (InflationRate/Compounds)) ** (Compounds * i))));
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
        text(MoneyLost[i], RectXs[i],MoneyLost[i] + 20);
        // Initial Investment Rectangle
        rect(RectXs[0], 0, RectWidth, CompoundedMoney[0]);
        text(CompoundedMoney[0], 0,CompoundedMoney[0] +20);
    }
}
}

// Create Pointer
function CreatePointer()
{
    fill(g,b,r);
    circle(x,y,diameter);
    textSize(30);
}

function Instructions()
{
    fill(g,b,r);
    textSize(15);
    text("This graph compares compound interest against compound interest adjusted for 2% inflation. Additionally, if no money was invested how much value would be lost to inflation", 15, 25);
    text("Every pixel going down represents 1 Dollar to really show the power of compound interest", 15, 45);
    text("Use WASD and Shift to move the circle", 15, 65);
    text("Click anywhere to immediately move the circle to that location", 15, 85);
}

// Pointer Controls
function PointerMovement()
{
    text("Amount:" + y, x - 60, y + 35);

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

    // Checks if Shift is being Pressed
    if(keyIsDown(68) && keyIsDown(16))
    {
        x+=12;
    }
    if(keyIsDown(65) && keyIsDown(16))
    {
        x-=12;
    }
    if(keyIsDown(87) && keyIsDown(16))
    {
        y-=12;
    }
    if(keyIsDown(83) && keyIsDown(16))
    {
        y+=12;
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