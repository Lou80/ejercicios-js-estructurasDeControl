/* Crear un documento con el nombre ej102.js
Mostrar en consola el siguiente dibujo de un tablero de ajedrez:
* * * * * * * *
 * * * * * * *
* * * * * * * *
 * * * * * * *
* * * * * * * *
 * * * * * * *
* * * * * * * *
 * * * * * * *
 */
var linea1 = '* ';
var linea2 = ' *';

 for (i=0; i<=9; i++) {
    if (i%2==0){
        console.log(linea1.repeat(8))
    } else {
        console.log(linea2.repeat(7))
    }
 }