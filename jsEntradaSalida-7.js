/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var suma;
	var numeroUno;
	var numeroDos;
	numeroUno= parseInt(document.getElementById('numeroUno').value);
	numeroDos= parseInt(document.getElementById('numeroDos').value);
	
	suma= numeroUno+numeroDos;
	alert("El resultado es "+suma);
}

function restar()
{
	var resta;
	var numeroUno;
	var numeroDos;
	numeroUno= parseInt(document.getElementById('numeroUno').value);
	numeroDos= parseInt(document.getElementById('numeroDos').value);
	
	resta= numeroUno-numeroDos;
	alert("El resultado es "+resta);
}

function multiplicar()
{ 
	var multiplica;
	var numeroUno;
	var numeroDos;
	numeroUno= parseInt(document.getElementById('numeroUno').value);
	numeroDos= parseInt(document.getElementById('numeroDos').value);
	
	multiplica= numeroUno*numeroDos;
	alert("El resultado es "+multiplica);	
}

function dividir()
{
	var divide;
	var numeroUno;
	var numeroDos;
	numeroUno= parseInt(document.getElementById('numeroUno').value);
	numeroDos= parseInt(document.getElementById('numeroDos').value);
	
	divide= numeroUno/numeroDos;
	alert("El resultado es "+divide);	
}

