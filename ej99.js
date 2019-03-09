/*Crear un documento con el nombre ej99.js
Sumar los números pares del 0 al 10000
Cortar la ejecución al encontrar 10 números pares
Mostrar en consola el resultado de los números hasta el momento del corte*/



var numero = 0;
var resultado = null;
var contador = 0;

 while (numero <=10000) {
     resultado +=numero;
     numero+=2;
   if (resultado % 2 == 0) {
    contador++;
   }
   if (contador >=10) {
       break;
   }
 }

 console.log(resultado)