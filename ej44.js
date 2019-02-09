/*Crear un documento con el nombre ej44.js
Declarar la variable texto y asignar el siguiente valor: HOLA
Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
Mostrar en consola el contenido de la variable resultado en minúscula
Deberías ver como resultado la palabra aloh*/


var texto = 'HOLA';
var resultado = texto.charAt(3).concat(texto.charAt(2).concat(texto.charAt(1).concat(texto.charAt(0))));

console.log(resultado.toLowerCase());

