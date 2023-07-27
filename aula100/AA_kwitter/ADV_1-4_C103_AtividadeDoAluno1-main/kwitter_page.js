//LINKS DO SEU APP FIREBASE

const firebaseConfig = {
      apiKey: "AIzaSyBcYfcscpXKi7SJA_tURrYRdVaw28czB0o",
      authDomain: "kwiter-2-80de9.firebaseapp.com",
      databaseURL:"https://kwiter-2-80de9-default-rtdb.firebaseio.com/",
      projectId: "kwiter-2-80de9",
      storageBucket: "kwiter-2-80de9.appspot.com",
      messagingSenderId: "267170240511",
      appId: "1:267170240511:web:ef1654a78f6b033b09f9ca"
    };
    
    firebase.initializeApp(firebaseConfig);

    userName = localStorage.getItem("user_name");
    roomName = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({

            name:userName,
            message:msg,
            like: 0

      });

      document.getElementById("msg").value = "";
    }
    

    function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Comece a programar aqui

//Termine de programar aqui
      } });  }); }
getData();
