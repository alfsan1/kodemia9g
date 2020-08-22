


var num1 = parseInt( prompt("Ingrese Primer Número"))
var num2 = parseInt( prompt("Ingrese Segundo Número"))

/* var suma = num1 + num2
var resta = num1 - num2
var division = num1 / num2
var multiplicar = num1 * num2

var funcion = prompt("Escoja entre suma, resta, multiplicar, division")

function resultado() {
    console.log(funcion);
    if (funcion == "suma"){
        return suma;
    }
    else if (funcion == "resta"){
        return resta;
    }
    else if (funcion == "multiplicar"){
        return multiplicar;
    }
    else {
        return division;
    }

}

console.log(resultado()); 

if (num1 > num2){
    console.log("num1 es mayor que num2")
}
    else{
        console.log("num2 es mayor que num1")
    }

if (num1 % 2){
    console.log("el número 1 es impar")
}
    else{
        console.log("el número 1 es par") 
    }

    if (num2 % 2){
        console.log("el número 2 es impar")
    }
        else{
            console.log("el número 2 es par") 
        } */
        
if (num1 % 2 == 0 && num2 % 2 == 0) {
    console.log("Ambos números son pares")
}
    else if (num1 % 2 !== 0 && num2 % 2 !==0){
        console.log("Ambos números son impares")
    }
    else if (num1 % 2 !==0 && num2 % 2 ==0){
        console.log("el primer número es impar, el segundo número par")
    }
    else {
        console.log("el primer número es PAR, el segundo número IMPAR")
    }