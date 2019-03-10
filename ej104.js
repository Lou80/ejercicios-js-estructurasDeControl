/* Crear un documento con el nombre ej104.js
Partiendo del siguiente código, realizar la suma de todos los números pares que hay entre el valor guardado en la variable n y el valor guardado en m (incluyéndolo).
*/
var n = 10;
var m = 26;
var resultado = 0;


// SOLUCION
for (var i = n; i<=m; i+=2) {
    resultado+=i;
}

console.log(resultado);
// deberia mostrar 162
// porque: 10 + 12 + 14 + 16 + 18 + 20 + 22 + 24 + 26



