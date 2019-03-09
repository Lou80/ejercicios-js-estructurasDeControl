/*Crear un documento con el nombre ej92.js
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


var estrella = '*';

while (estrella.length < 15) {
    console.log(estrella);
    estrella += '*';

}
Modificar el código utilizando la estructura for en lugar de do/while*/

for (var estrella = '*'; estrella.length < 15; estrella += '*') {
    console.log(estrella);
}