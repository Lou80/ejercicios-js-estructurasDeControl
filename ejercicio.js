/*var diasem

diasem = prompt('Ingrese un día de la semana', '')

switch (diasem) {
    case 'domingo':
    console.log('Uff mañana es lunes');
    break;
    case 'lunes':
    console.log('martes no te cases');
    break;
    case 'martes':
    console.log('día de miércoles');
    break;
    case 'miércoles':
    console.log('bien jueves Ada otra vez');
    break;
    case 'jueves':
    console.log('dale que ya llega el viernes');
    break;
    case 'viernes':
    console.log('a dormir que sábado temprano a Ada');
    break;
    case 'sábado':
    console.log('modo domingo on');
    break;
    default:document.write('Intente nuevamente y sin faltas de ortografía');

}

/*var listaNombre = ['Lou', 'Bel', 'Vir', 'Maqui'];

for(var i=0; i<listaNombre.length; i++) {
   document.write(i + listaNombre [i])
}
*/

/*var mascotas = ['Galileo', 'Simona', 'Almendra', 'Antonia', 'Cholita', 'Carlitos'];

for (var i = 0; i < mascotas.length; i++) {
console.log(i + mascotas [i] + mascotas[i].length);
}
*/


/*var listaFrutas = ['Banana', 'Mango', 'Naranja', 'Frutilla', 'Pera', 'Manzana'];

for(var i = listaFrutas.length-1; i >= 0; i--) {
   console.log(i + listaFrutas [i]);
}*/



/*var listado = [];

var cantidadNombres = 5;


for (var i = 0; i < cantidadNombres; i++) {

    var nombre = prompt('Ingrese un nombre:', '');
    listado.push(nombre);
}
console.log(listado);*/


/*var mes

mes = prompt('Ingrese un mes', '')

switch (mes) {
    case 'enero':
    case 'febrero':
    case 'marzo':
    console.log('Estamos en verano');
    break;
    case 'abril':
    case 'mayo':
    case 'junio':
    console.log('Otoño');
    break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
    console.log('invierno');
    break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
    console.log('primavera');
    break;
    default:document.write('Escribiste cualquier cosa');

}*/

// Ejercicio tres:
// Crear un array de strings.
// Eliminar un elemento e
// imprimir la lista actualizada,
// hasta que quede vacio el array.


/*var mascotas = ['Galileo', 'Simona', 'Almendra', 'Antonia', 'Cholita', 'Carlitos', 'Pocho'];

var cantidadNombres = mascotas.length; //defino una variable para contar la cantidad, antes del for//

for(var i = 0; i <cantidadNombres; i++) {
mascotas.pop(); console.log(mascotas)
}*/


// Ejercicio cuatro:
// Crear dos arrays vacios.
// listadoDeNotas y listadoDeNotasAprobadas
// Ingresar todas las notas.
// Evaluar cada nota,
// si son mayores 8... impriman algo: 'Excelente nota'.
// si esta entre 5 y 7... impriman algo: 'Buena nota'.
// De lo contrario... impriman algo: 'Necesito practicar más'.
// imprimir cantidad de notas 'Excelente nota', 'Buenas notas' y 'Necesito practicar más.


/*var listadoDeNotas = [];

var listadoDeNotasAprobadas = [];

var cantidadNotas = 6;

for (var i = 0; i < cantidadNotas; i++) {

    var nota = prompt('Ingrese su nota final:', '');
    listadoDeNotas.push(nota);
    var nota = parseInt(nota);
    if (nota <=4) {
        
    }



switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4:
    document.write('Necesitas practicar más');
    break;
    case 5:
    case 6:
    case 7:
    document.write('Buena nota'); 
    break;
    case 8:
    case 9:
    case 10:
    document.write('Excelente Nota');
    break;
    default:document.write('Ingrese una nota válida');
}

if(nota >= 5) {
    listadoDeNotasAprobadas.push(nota)
}
else {console.log('Nota desaprobada')}

*/

/*var nombre = 'Lourdes';
undefined
var apellido = ' Ramirez';
undefined
var nombreCompleto = nombre + apellido;
undefined
nombreCompleto
"Lourdes Ramirez"
var unNumero = 9;
undefined
var otroNumero = 27;
undefined
unNumero + otroNumero
36
var resultado = unNumero + otroNumero;
undefined*/


/*var numero = 1;
var numeroDos = 1*/


/*var comparacion = 1;
var otraComparacion = '1';

var terceraComparacion = 1;

console.log(comparacion == otraComparacion); //esto va a dar true (porque )
console.log(comparacion === otraComparacion); //esto va a dar false
var compar = undefined;
var otraCompar = 'undefined';

console.log(compar == otraCompar);
console.log(compar === otraCompar);

console.log(comparacion != otraComparacion);
console.log(comparacion !== otraComparacion);


var valor = 10;
var otroValor = 20;
*/


/*var usuario = prompt('ingresa usuario:', '');
var contrasena = prompt('ingresa contrasena:', '');


var resultado = usuario === 'lou80' && contrasena === 'loca1234';

console.log(resultado);*/


/*var usuarios = 15;
var contrasena = 0;

if (usuarios => 15) {
    contrasena+=15;
    console.log(contrasena);
}
if (usuarios==15 && contrasena==15) {
    console.log('se puede empezar');
}
*/

/*var usuarios = true;

if (usuarios) {
    console.log ('Existe');
}
else{
    console.log('No existe');
}*/


/*var contrasena = 'password123';
var nombreUsuario = 'lala';
if (contrasena.length >= 10) {
console.log ('tu password esta ok');

if (nombreUsuario.length >= 10) {
    console.log('tu nombre de usuario esta ok')
}
*/



/*var numero = 10;

numero == 10 ? console.log('es diez') : console.log('no es diez');

// Operador ternario, otra manera de escribir un IF, donde se coloca la condicion, despues del signo ? va lo que se ejecuta cuando verdadera y lo q va despues de los dos puntos cuando es falso, como un else


*/

/*var nombre = 'Marta';
var mensaje = null;

switch (nombre) {
    case 'Marta':
        mensaje = 'Es Marta'; //aca antes del break podria seguir escribiendo código para que se ejecute
        break;
        case 'Felipa':
        mensaje = 'Es Felipa';
        break;
        case 'Xime':
        mensaje = 'Es Xime';
        break;
        case 'Belu':
        mensaje = 'Es Belu';
        break;
    default:
        mensaje = 'el nombre de la usuaria no es valido'
        break;
} 
console.log(mensaje);
//esta esrtuctura es equivalente a IF, ELSE IF, ELSE
*/


/*var arrayDeNombres = ['Malena', 'Vicky', 'Luciana', 'Pini'];

console.log('Todo el array', arrayDeNombres);

console.log('Posicion 0 del array', arrayDeNombres[0]);

console.log('Longitud del array', arrayDeNombres.length);

console.log('La última posición del array', arrayDeNombres[arrayDeNombres.length - 1]);

console.log('El array convertido en string', arrayDeNombres.toString());

*/



var alumnas = [
    'Maria',
    'esther',
    'consuelo',
    'Barbara',
    'Luisana',
    'pancracia',
    'luzbelita',
    'Jimena'
   ]

