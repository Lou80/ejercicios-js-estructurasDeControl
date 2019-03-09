/*Crear un documento con el nombre ej98.js
Sumar los números del 0 al 1000
Cortar la ejecución si la suma es superior a 100
Mostrar el resultado final en consola*/


var resultado = null;
var numero = 0;

 while (numero <=1000) {
     resultado +=numero;
     numero++;
     if (resultado >100) {
        break;
     }
 }

console.log(resultado);
