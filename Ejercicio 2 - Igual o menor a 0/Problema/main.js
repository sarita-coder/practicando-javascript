//Escribe aquí tú código
function igual_mayor_0() {
	// body...
	var cantidad = parseInt(prompt("cuantos números ingresaras ? "));
	var i=0;
	var mayor_0=0;
	var menor_0=0;
	while (cantidad!=0){
		cantidad--;
		i=i+1;
		numeros = parseInt(prompt("Ingrese el numero "+i+" a calcular : "));
		if (numeros<0){
			menor_0=menor_0+1;

		} else {

			mayor_0=mayor_0+1;
		}

		console.log(menor_0,mayor_0);
	}
	alert("cantidad de números que son mayores o igual  a 0 son: "+mayor_0+" , menores a 0  son: "+ menor_0);
}
igual_mayor_0();