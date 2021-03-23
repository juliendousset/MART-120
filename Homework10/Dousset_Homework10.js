// for arms
var x1 = 185;
var x2 = 285;

// for legs
var xlegs1 = 210;
var xlegs2 = 260;
var ylegs = 310;

// for eyebrows
var y = 50

// random movement speed
var movement = Math.floor(Math.random() * 10);
var movement2 = Math.floor(Math.random() * 10);
var movement3 = Math.floor(Math.random() * 10);

// for text
var sizeDirection = 3;
size = 20;
var count = 0;

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    // background
    background(150,200,100);
    fill(150,150,150);

    // hair
    ellipse(190,140,40,100);
    ellipse(310,140,40,100);
    fill(220,200,180);

    // face
    circle(250,100,150);
    fill(100,150,200);

    // legs
    rect(xlegs1,ylegs,25,150);
    rect(xlegs2,ylegs,25,150);
    xlegs1 += movement / movement3;
    xlegs2 += movement / movement3;
    ylegs += movement / movement3;

    // arms
    rect(x1,180,25,150);
    x1 += movement / movement2;

    rect(x2,180,25,150);
    x2 += movement / movement2;
  
    // body
    rect(210,165,75,150);
    fill(200,180,160);

    // nose
    triangle(255, 100, 230, 100, 270, 120);

    // eyebrows
    line(260, y, 290, y);
    line(210, y, 240, y);
    if(y >= 60 || y <=40)
    {
        movement*=-1;
    }

    y += movement;

    // eyes
    circle(225,80,35);
    circle(275,80,35);
    point(225, 80);
    point(275, 80);
    
    // mouth
    ellipse(250,135,70,25);

    // text
    fill(0,0,0)
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Julien Dousset', 50,550);
}