/*Crear un documento con el nombre ej82.js
Copiar y pegar el código del ejercicio ej72.js:
Mostrar en consola el siguiente dibujo utilizando la estructura while
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
*
var estrella = '*';

while (estrella.length < 15) {
    console.log(estrella);
    estrella += '*';

}

Modificar el código utilizando la estructura do/while en lugar de while*/

var estrella = '*';

do {
    console.log(estrella);
    estrella += '*';
} while (estrella.length < 15);