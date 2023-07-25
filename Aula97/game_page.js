var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

 player1_Score = 0;
 player2_Score = 0;

 document.getElementById("player1_name").innerHTML = player1_name + " : ";
 document.getElementById("player2_name").innerHTML = player2_name + " : ";

 document.getElementById("player1_Score").innerHTML = player1_name ;
 document.getElementById("player2_Score").innerHTML = player2_name ;

 document.getElementById("player_question").innerHTML = "Turno de Respostas - "+ player1_name;
 document.getElementById("player_answer").innerHTML = "Turno de Respostas - "+ player2_name;

function send()
{
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("palavra em letra minúsculo = " + word);

    chartAt1 = word.chartAt1(1);
    console.log(chartAt1);

    charAt1 = word.charAt(1); 
     console.log(charAt1); 
    
    
    charAt1 = word.charAt(1); console.log(charAt1); lenghtDivide2 = Math.floor(word.length/2); charAt2 = word.charAt(lenghtDivide2); console.log(charAt2);
    lenghtMinus1 = word.length - 1;
    charAt3 = word.charAt(lenghtMinus1);
    console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_"); removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3);

    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>"; inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>"; 
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
     row = question_word + inputBox + checkButton ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

    charAt1 = word.charAt(1); console.log(charAt1); lenghtDivide2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lenghtDivide2);
     console.log(charAt2);
      lenghtMinus1 = word.length - 1;
 charAt3 = word.charAt(lenghtMinus1);
    console.log(charAt3);
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
     removeCharAt3 = removeCharAt2.replace(charAt3, "_");
     console.log(removeCharAt3);


}


     questionTurn = "player1";
     answerTurn = "player2";

function check()
{
     getanswer = document.getElementById("inputCheckBox").value;
     anserw = getAnsewr.toLowerCase();
     console.log("resposta em caixa - " + answer);

     if(answer == word)
     {
          if(answerTurner == "player1")
          {
               player1_Score = player1_Score +1 ;
              document.getElementById("player1_Score").innerHTML = player1_Score ;
          }

          else
          {
               player2_Score = player2_Score +1 ;
             document.getElementById("player2_Score").innerHTML = player2_Score ;
          }
     }
     if(questionTurn == "player1" )
     {
          questionTurn == "player2"
         document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player2_name ;
     }

     else
     {
          questionTurn == "player1"
          document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1_name ;   
     }

     if( answerTurn == " answerTurn")
     {

     if(answerTurn == "player1" )
     {
          answerTurn == "player2"
         document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player2_name ;
     }

     else
     {
          answerTurn == "player1"
          document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player1_name ;   
     }
}

     document.getElementById("output").innerHTML = "";

}

 

