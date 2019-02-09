/*Crear un documento con el nombre ej48.js
Declarar la variable piString y guardar el valor 3.14 como String
Declarar la variable constanteString y guardar el valor 42 como String
Declarar la variable pi y guardar el valor que tenemos en la variable piString y transformarlo como número decimal
Declarar la variable constante y guardar el valor que tenemos en la variable constanteString y transformarlo como número entero
Declarar la variable resultado y asignar el resultado de la suma de las variables pi y constante
Mostrar en consola el contenido de la variable resultado
Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables *pi* y *constante*, donde *pi* es el valor que tiene la variable pi y *constante* es el valor de la variable constante. Utilizar el método toString para convertir los numbers a strings.*/

var piString = '3.14';
var constanteString = '42';
var pi = parseFloat(piString);
var constante = parseInt(constanteString);
var resultado = pi + constante;
console.log(resultado);
console.log(resultado + ' es el resultado de sumar las variables', pi, 'y', constante, 'donde', pi, 'es el valor que tiene la variable "pi" y', constante, 'es el valor que tiene la variable "constante"');