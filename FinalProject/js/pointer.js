// Variables for Pointer Location
var x = canvaswidth/10;
var y = window.innerHeight/2;
var diameter = 10;

function CreatePointer()
{
    if (FormFilled == "yes")
    {
        fill(g,b,r);
        circle(x,y,diameter);
        textSize(30);
    }
}

function PointerMovement()
{
    if (FormFilled == "yes")
    {
        textSize(15);
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
}

// Move the pointer to the position where the mouse was clicked
function mouseClicked()
{
    if (FormFilled == "yes")
    {
        x = mouseX;
        y = mouseY;
    }
}