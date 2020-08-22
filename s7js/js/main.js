/*let capital = prompt("cuál es la capital de mexico")


if((capital === "mexico") || (capital === "cdmx")|| (capital === "ciudad de mexico") || (capital === "df")) {
     console.log("Es Correcto")
} 
else{
    console.log("Es incorrecto")
} */

/*Crear un programa que pida un número mayor que 5 al usuario, y muestre todos los múltiplos de 3, desde 0 hasta el número adquirido*/

/*let num = parseInt(prompt("Ingresa un valor mayor a 5"));
let counter = 0;
if(num <= 5){
        alert("Número es menor que cinco")
    } else{
        while( counter <= num){
            if(counter % 3 === 0){
                console.log(counter);
            }
            counter ++
        }
    }
*/

/* teniendo la frase "La mejor forma de predecir el futuro es creándolo", crear un programa que imprima una nueva frase usando únicamente las letras que tengan una posición par*/

/* primero ponerle ponerle posición a las letras >
segundo, contar cada posición y ver si es even
tres, seleccionar las letras de la posición par
cuatro, imprimpir las posiciones even/pares
*/


var frase = "La mejor forma de predecir el futuro es creándolo"
var length = frase.length;
var i = 0
var fraseFinal = frase.chartAt(i)

while( i < length){
    if(i % 2 == 0){
        console.log(fraseFinal);
    } i ++  
}



