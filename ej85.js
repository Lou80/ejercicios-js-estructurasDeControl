/*Crear un documento con el nombre ej85.js
Copiar y pegar el código del ejercicio ej75.js: 
Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
*/

var n = 0;
var A = 1;
var B = 0;
var C = 0;

/*while (n <= 9 ) {
    console.log(C);
    C = A + B;
    A = B;
    B = C;
    n++;
}
Modificar el código utilizando la estructura do/while en lugar de while*/

do {
    console.log(C);
    C = A + B;
    A = B;
    B = C;
    n++;
} while (n <= 9);

