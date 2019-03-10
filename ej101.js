/* Crear un documento con el nombre ej101.js
Mostrar en consola el siguiente dibujo de un cuadrado hueco:
*****
*   *
*   *
*   *
*****
Nota: algunos navegadores agrupan los mensajes en consola si son iguales. En ese caso, el cuadrado se verá así:

*****
(3) *   *
*****

*/


for (var i=0; i<=4; i++) {
    if (i == 0 || i == 4 ) {
        console.log('*****')
    } else {
        console.log('*   *')
    }
}

