/*Crear un documento con el nombre ej45.js
Declarar la variable mensaje y establecer el siguiente valor: 'Ada Lovelace fue la ayudante de Charles Babbage.'
Declarar la variable programadora
Utilizar el método slice para obtener el nombre Ada Lovelace del texto en la variable mensaje y asignarlo a la variable programadora
Utilizar la variable programadora y la concatenación de textos para mostrar en consola el siguiente mensaje: "¡Ada Lovelace la primer programadora de la historia!*/

var mensaje = 'Ada Lovelace fue la ayudante de Charles Babbage.'
var programadora = mensaje.slice(0, 12);

console.log('¡',programadora.concat(' la primer programadora de la historia!'));