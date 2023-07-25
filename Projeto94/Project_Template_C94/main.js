
// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');

//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0
ball_x=0
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// programe o envio da imagem do buraco de golfe ao canvas
	fabric.fromURL("golf-b.png" , function(img){
		hole_obj = img;
		hole_obg.scaleToWidth(50);
		hole_obg.scaleToHeight(50);
		hole_obg.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obg);
	});
	new_image();
}

function new_image()
{
	// programe o envio da imagem da bola ao canvas
	fabric.fromURL("golf-b.png" , function(img){
		hole_obj = img;
		hole_obg.scaleToWidth(50);
		hole_obg.scaleToHeight(50);
		hole_obg.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(hole_obg);
	});

	
	
}




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getElementById("hd3").innerHTML="Você acertou o buraco!"
	document.getElementById("myCanvas").style.borderColor="red";

   {
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	
   }
	function up()
	{
		// Programe o movimento da bola para cima.
	}

	function down()
	{
		 // Programe o movimento da bola para baixo.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
		}
	}
	
}

