function Mostrar()
{
//tomo la edad  
var edad;
edad= document.getElementById('edad').value;

if(!(edad>12 && edad<17))
{
	alert("NO es adolescente");
}
/*
if (edad>12 && edad<17)
{

}

else
{
	alert("no es adolescente");
}
*/
}//FIN DE LA FUNCIÓN