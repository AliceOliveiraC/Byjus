
//ADICIONE SEUS LINKS DO FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyBcYfcscpXKi7SJA_tURrYRdVaw28czB0o",
  authDomain: "kwiter-2-80de9.firebaseapp.com",
  databaseURL:"https://kwiter-2-80de9-default-rtdb.firebaseio.com/",
  projectId: "kwiter-2-80de9",
  storageBucket: "kwiter-2-80de9.appspot.com",
  messagingSenderId: "267170240511",
  appId: "1:267170240511:web:ef1654a78f6b033b09f9ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() 
{ 
     firebase.database().ref("/").on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
