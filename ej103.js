/* Mostrar en consola el siguiente dibujo de un diamante:
*
***
*****
*******
*********
*******
*****
***
*

*/

var estrella = '*';
var linea = '';
var i = 0;

while (i <= 4) {
    console.log(linea += estrella);
    i++;
}

for (i = 4; i >= 1; i--) {
    console.log(estrella.repeat(i))
}

