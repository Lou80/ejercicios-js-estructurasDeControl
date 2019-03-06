/* Crear un documento con el nombre ej75.js
Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
Podes leer más sobre esta secuencia en Wikipedia
Acá podes encontrar una pequeña ayuda */


var n = 0;
var A = 1;
var B = 0;
var C = 0;

while (n <= 9 ) {
    console.log(C);
    C = A + B;
    A = B;
    B = C;
    n++;
}