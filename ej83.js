/* Crear un documento con el nombre ej83.js
Copiar y pegar el código del ejercicio ej73.js:

Mostrar en consola el siguiente dibujo utilizando la estructura while:
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
* */

var multiplicador = 10;
var estrellas = '**********';


/*while (multiplicador >= 1) {
console.log(estrellas);
estrellas = estrellas.substr(0,estrellas.length-1);
multiplicador--;
}


Modificar el código utilizando la estructura do/while en lugar de while*/


do {
    console.log(estrellas);
    estrellas = estrellas.substr(0,estrellas.length-1);
    multiplicador--;
} while (multiplicador >= 1);


