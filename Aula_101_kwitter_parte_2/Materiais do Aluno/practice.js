
//ADICIONE OS LINKS DO SEU APP FIREBASE

const firebaseConfig = { apiKey: "AIzaSyByKc7GtGeNJchiWJBVAYC95AFJRBZ_us8",
authDomain: "vamosconversar-dbb82.firebaseapp.com",
 databaseURL: "https://vamosconversar-dbb82-default-rtdb.firebaseio.com",
 projectId: "vamosconversar-dbb82", 
storageBucket: "vamosconversar-dbb82.appspot.com", 
messagingSenderId: "1047343423913",
 appId: "1:1047343423913:web:b1cc7ba5acd4f536f6e4b8" };

 // Initialize Firebase firebase.initializeApp(firebaseConfig);
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);



// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);



// Adicionar a função para adicionar usuário

function addUser()
{
userName = document.getElementById("userName").value
firebase.database().ref("/").child(userName).update({
   purpose:"adicionar usuário"

});
}