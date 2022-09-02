
var choix = true;

function myfunction(){  

if(choix == true)
{
    document.getElementById("couleur1").style.color = "white";
    document.getElementById("bloc1").style.backgroundColor = "red";
    document.getElementById("couleur2").style.color = "white";
    document.getElementById("bloc2").style.backgroundColor = "red"; 
    document.getElementById("couleur3").style.color = "white";
    document.getElementById("bloc3").style.backgroundColor = "red"; 
    document.getElementById("couleur4").style.color = "white";
    document.getElementById("bloc4").style.backgroundColor = "red";
    choix = false;
}else{
    document.getElementById("couleur1").style.color = "black";
    document.getElementById("bloc1").style.backgroundColor = "green";
    document.getElementById("couleur2").style.color = "black";
    document.getElementById("bloc2").style.backgroundColor = "green"; 
    document.getElementById("couleur3").style.color = "black";
    document.getElementById("bloc3").style.backgroundColor = "green"; 
    document.getElementById("couleur4").style.color = "black";
    document.getElementById("bloc4").style.backgroundColor = "green";
    choix = true;
}
} 


function myname() {
 
    var champPrenom = document.getElementById("prenom").value;
    var champNom = document.getElementById("nom").value;
    var champEmail = document.getElementById("mail").value;
    var champCom = document.getElementById("comment").value;
    var champTel = document.getElementById("tel").value;
    var tab = [champPrenom, champNom, champTel, champEmail, champCom];
   
    if (champPrenom==="")
    {
        alert("veuillez renseigner ce champ");
    }
    else if (champNom==="")
    {
        alert("veuillez renseigner ce champ");
    }
     else if (champEmail==="")
    {
        alert("veuillez renseigner ce champ");
    }
    else if (champTel==="")
    {
        alert("veuillez renseigner ce champ");
    }
   else{

alert(tab)
    }
}
  









 