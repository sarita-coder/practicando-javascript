//Escribe aquí tú código
function suma_de_tallas(num_personas, mensaje) {
	// body...
	var suma=0;
	var i = 0;
	while (i < num_personas){
		var talla = parseInt(prompt(mensaje+(i+1)+" : "));
		suma=suma+talla;
		i++;
	} 
	return suma;
}
var num_personas = parseInt(prompt("Ingrese la cantidad de personas: "));
var suma = suma_de_tallas(num_personas, "Ingrese la talla ");
var promedio=(suma/num_personas);

alert("El promedio de las talla es : "+promedio);