
canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

color = "black"; 
 var widhtLine = 1;

 var mouseEvent = "empty"
 var lastPositionX, lastPositionY;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //pegando cor da caixa de entrada
    //início da atividade adicional
    color = document.getElementById("color").value;
    console.log(color);
    widhtLine = document.getElementById("widhtLine").value
    //fim da atividade adicional

    mouseEvent = "mouseDown";
    
    
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offseLeft;
    PositionMouseY = e.clientY - canvas.offseTop;

    if (mouseEvent == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidht = widhtLine;

        console.log("last position of x and y coordinates = ")
        console.log("x = " + PositionMouseX + "y = " + PositionMouseY );
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Current position of x and y coodinates = ");
        console.log("x = " + PositionMouseX + "y = " + PositionMouseY );
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;



}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}

anvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}
//atividade adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
