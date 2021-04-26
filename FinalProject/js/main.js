// Sets Canvas Size
var canvasheight = window.innerHeight - 20;
var canvaswidth = window.innerWidth - 25;

// Create a random color at the start
var r = GetRandomNumber(255);
var g = GetRandomNumber(255);
var b = GetRandomNumber(255);
// Random Color for the Bubbles
var r2 = 255 - GetRandomNumber(20);
var g2 = 255 - GetRandomNumber(20);
var b2 = 255 - GetRandomNumber(20);

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
var InflationRate = 0.02;
var Scale = 1;
var Middle = canvasheight-(canvasheight/3);
var FormFilled = "no";

function setup()
{
    createCanvas(canvaswidth,canvasheight);
    
    // Create Location for the Bubbles
    for(var i = 0; i < 10; i++)
    {
        MyXs[i] = GetRandomNumber(canvaswidth);
        MyYs[i] = GetRandomNumber(canvasheight);
        MyDiameters[i] = GetRandomNumber(100);
    }
}

function draw()
{
    background(255);

    Resize();

    BackgroundBubbles();

    CreateGraph();

    CreatePointer();

    PointerMovement();
}

function Resize()
{
    if (document.getElementById("scale").value == "Pixel")
    {
        var canvasheight = CompoundInterest(TimeHorizon - 1) + (CompoundInterest(TimeHorizon - 1) * (1/3));
        var canvaswidth = window.innerWidth - 25;
        resizeCanvas(canvaswidth, canvasheight);
        RectWidth = canvaswidth/TimeHorizon;
        Middle = canvasheight-(canvasheight/3);
        Scale = 1;
    }
    if (document.getElementById("scale").value == "Scaled")
    {
        var canvasheight = window.innerHeight - 20;
        var canvaswidth = window.innerWidth - 25;
        resizeCanvas(canvaswidth, canvasheight);
        RectWidth = canvaswidth/TimeHorizon;
        Middle = canvasheight-(canvasheight/3);
        Scale = Middle/CompoundInterest(TimeHorizon - 1);
    }
}

function GetRandomNumber(number)
{
    return Math.floor(Math.random()*number);
}

// Functions to get the calculations for the Graph
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
    if (FormFilled == "yes")
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
            fill(0);
            text(CompoundedMoneyValue[i], RectXs[i], (Middle - CompoundedMoney[i]) - 5);
            // Lost to Inflation
            fill(50);
            rect(RectXs[i], Middle-MoneyLost[i], RectWidth, MoneyLost[i]);
            fill(0);
            text(MoneyLostValue[i], RectXs[i], (Middle - MoneyLost[i]) + 15);
            // Adjusted For Inflation
            fill(b,r,g);
            rect(RectXs[i], Middle-InflationCompounded[i], RectWidth, InflationCompounded[i]);
            fill(0);
            text(InflationCompoundedValue[i], RectXs[i], (Middle - InflationCompounded[i]) - 5);
            // Text to say what year it is
            fill(0);
            text(i, RectXs[i], (window.innerHeight - 20) - 10);
        }
        // Year 0 Text
        text(0, 0, (window.innerHeight - 20) - 10);
        // Initial Investment Rectangle
        fill(50);
        rect(RectXs[0], Middle-CompoundedMoney[0], RectWidth, CompoundedMoney[0]);
        text(CompoundedMoneyValue[0], RectXs[0], (Middle - CompoundedMoney[0]) - 5);
        // Graph Instructions
        textSize(15);
        fill(50);
        square(RectXs[0] + 5, Middle + 85, 15);
        fill(b,r,g);
        square(RectXs[0] + 5, Middle + 65, 15);
        fill(r,g,b);
        square(RectXs[0] + 5, Middle + 45, 15);
        fill(0);
        text("Compounded Money", RectXs[0] + 25, Middle + 60);
        text("Compounded Money Adjusted for 2% Inflation", RectXs[0] + 25, Middle + 80);
        text("Value Lost to 2% Inflation", RectXs[0] + 25, Middle + 100);
    }
}