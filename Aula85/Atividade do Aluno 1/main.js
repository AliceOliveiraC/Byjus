nameOfTheStudentsArray=[]
// Defina um array vazio que armazena os nomes dos alunos.
    
function submit()
{
    var displayStudentArray = []

    for (var j = 1; j <= 4; j++);

    {
      var   nameOfTheStudents = document.getElementById("nameOfTheStudent" + j).value
      console.log("nameOfTheStudentsArray");
      nameOfTheStudentsArray.push("nameOfTheStudentsArray")
    
    }

    console.log(nameOfTheStudentsArray);

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length; 
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k <= lenghtOfNameOfStudentsArray; k++);
    {
      var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length; console.log(lenghtOfNameOfStudentsArray);

displayStudentArray.push("NAME- "+ nameOfTheStudentArray[k] + "</h4>"); console.log(displayStudentArray);

      var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length; console.log(lenghtOfNameOfStudentsArray);

displayStudentArray.push("NAME- "+ nameOfTheStudentArray[k] + "</h4>"); console.log(displayStudentArray);

      var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length; console.log(lenghtOfNameOfStudentsArray);

displayStudentArray.push("NAME- "+ nameOfTheStudentArray[k] + "</h4>"); console.log(displayStudentArray);
    
    }

    console.log("displayStudentArray");
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
     console.log(removeCommas); 
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


     document.getElementById("submitButton").style.display = "none"; 
     document.getElementById("sortButton").style.display = "inline-block";

}  

function sorting()

{
   nameOfTheStudentArray.sorting();
   console.log(nameOfTheStudentArray);

   var displayStudentArraySort = [];

   var lenghtOfNameOfStudentsArray = lenghtOfNameOfStudentsArray.lenght;
   console.log(lenghtOfNameOfStudentsArray);

   for (var k = 0; k < lenghtOfNameOfStudentsArray; k ++)

   {
      displayStudentArraySort.push("<h4>NAME -" + nameOfTheStudentArray [k] + "<h4>");
      console.log(displayStudentArraySort);
   }

   var removeCommas = displayStudentArraySort.join(" ");
   console.log(removeCommas);

   document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas; 

     
}

