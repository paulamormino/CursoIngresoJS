function Mostrar()
{
	var resto;
	var resto2;
	var precioUno;
	var precioDos;
	var precioTres;

	precioUno= document.getElementById('precioUno').value;
	precioDos= document.getElementById('precioDos').value;
	precioTres= document.getElementById('precioTres').value;

	precioUno= parseInt(precioUno);
	precioDos= parseInt(precioDos);
	precioTres= parseInt(precioTres);

	resto= precioUno+precioDos+precioTres;
	resto2= (precioUno+precioDos+precioTres)/3;
	alert("El resultado total es "+resto+ "y su promedio es" + resto2);
}
