// For Background
var MyXs = [];
var MyYs = [];
var MyDiameters = [];
var squarexspeed = [];
var squareyspeed = [];

function BackgroundBubbles()
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