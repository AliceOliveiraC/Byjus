NomeAlunoArraw = [];

function enviar()

{
    var name1 = document.getElementById("NomedoEstudante1").value;
    var name2 = document.getElementById("NomedoEstudante2").value;
    var name3 = document.getElementById("NomedoEstudante3").value;
    var name4 = document.getElementById("NomedoEstudante4").value;

   NomeAlunoArraw.push(name1);
   NomeAlunoArraw.push(name2);
   NomeAlunoArraw.push(name3);
   NomeAlunoArraw.push(name4);

   console.log(NomeAlunoArraw);

   document.getElementById("displayName").innerHTML = NomeAlunoArraw;

}