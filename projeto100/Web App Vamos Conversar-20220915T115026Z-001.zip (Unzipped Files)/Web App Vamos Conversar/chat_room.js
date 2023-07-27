var bemVindoMaria

function addRoom()
{
    document.getElementById("user_name").value
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html"

    firebase.database().ref("/").on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;

        <div>
        </div>

       

       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });


}

function redirectToRoomName() 
{
    localStorage.setItem("user_name", user_name); 
    window.location = "chat_page.html"
}






