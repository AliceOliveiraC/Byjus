// Crie a função addUser()
function addUser() 
{
  // Obtenha o valor do usuário através das ids player1_name_input e player2_name_input

   let player1_name_input = document.getElementById("player1_name_input").value;   
   let player2_name_input = document.getElementById("player2_name_input").value;   
   localStorage.setItem("player1_name_input", player1_name_input);
   localStorage.setItem("player2_name_input", player2_name_input);
   window.location = "game_login.html";
}
  
function send()
{
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_ansewr = parseInt(number1) * parseInt(number2);
  question_number = "<h4> " + number1 + "X" + number2 + "</h4>";
  input_box = "<br> Resposta : <input type 'text' id = 'input_check_box'>" ;
  check_button = "<br></br><button class = ' btn btn info ' onclick= check()> verificar botão</button>" ;
  row = question_number + input_box + check_button ;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  

}
  

  
  


  
  

