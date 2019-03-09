/*Crear un documento con el nombre ej91.js
Copiar y pegar el código del ejercicio ej71.js: Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while

var multiplicador = 1;

while (multiplicador <= 10){
    console.log(9*multiplicador);
    multiplicador++;
}

Modificar el código utilizando la estructura for en lugar de do/while*/

for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(multiplicador*9);
}