// canvas size
var canvasheight = 10000;
var canvaswidth = window.innerWidth-20;

// create a random color at the start
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

// for main character
var x = canvaswidth/10;
var y = window.innerHeight/2;
var diameter = 25;

// For Graph
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
var InflationRate = 0.03;

function setup()
{
    createCanvas(canvaswidth,canvasheight);
}

function draw()
{
    background(200,200,200);

    // Create the Graph
    Graph();

    // Create Main Character
    CreateCharacter();

    // Controls for the Main Character
    CharacterMovement();
}

// Sets Values Once Form is Submitted
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
    RectWidth = canvaswidth/TimeHorizon

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
// Checks that Every Box is Filled Out before drawing Graph
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
    InflationCompounded[i] = (InitialInvestment * (((1+ ((InterestRate-0.03)/Compounds)) ** (Compounds * i))));
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
    text(InitialInvestment, 0,InitialInvestment +20);
}
}
}

// create character
function CreateCharacter()
{
    fill(g,b,r);
    circle(x,y,diameter);
    textSize(30);
}

// main character controls
function CharacterMovement()
{
    fill(g,b,r);
    textSize(15);
    text("This Graph Compares Compound Interest against Compound Interest adjusted for 3% Inflation and how much money would be lost due to Inflation", 15, 25);
    text("Every Pixel Going Down Represents 1 Dollar to Really show the power of Compound Interest", 15, 45);
    text("Use WASD and Shift to move the Circle", 15, 65);
    text("Click Anywhere to Immediately Move the Circle to that Location", 15, 85);
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

    // Checks To Make Sure Circle is not Out of Bounds
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

// Move the Circle to the Position where the mouse was clicked
function mouseClicked()
{
    x = mouseX;
    y = mouseY;
}