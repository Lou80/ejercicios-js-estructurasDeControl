/*Crear un documento con el nombre ej43.js
Declarar una variable texto con el siguiente valor: the dark knight
Declarar 3 variables en una línea con los siguientes nombres:
primerLetra
segundaLetra
tercerLetra
Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
Asignar a la variable segundaLetra el caracter número 4 del contenido de la variable texto
Asignar a la variable tercerLetra el caracter número 9 del contenido de la variable texto
Declarar una variable resultado con el valor de concatenar las variables primerLetra, segundaLetra y tercerLetra
Mostrar en consola el contenido de la variable resultado en mayúscula
Deberías ver TDK como resultado*/

var texto = 'the dark knight';

var primerLetra, segundaLetra, terceraLetra;

primerLetra = texto.charAt(0);
segundaLetra = texto.charAt(4);
terceraLetra = texto.charAt(9);

var resultado = primerLetra.concat(segundaLetra.concat(terceraLetra));

console.log(resultado.toUpperCase());