function addUser()
{
 var player1nameInput = document.getElementById("player1nameInput").value;
 var player2nameInput = document.getElementById("player2nameInput").value;
 localStorage.setItem("player1_name", player1name);
 localStorage.setItem("player2_name", player2name);
 window.location = "game_page.html";
}