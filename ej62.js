/*Crear un documento con el nombre ej62.js
Escribir un programa donde se ingresa un número que representa el mes y se obtiene como salida un mensaje con 
el nombre del mes y la cantidad de días que tiene
Declarar la variable numeroDeMes y asignar un valor entre 1 y 12
Declarar la variable nombreDelMes y asignar un valor null
Declarar la variable cantidadDeDias y asignar un valor null
Según el número del mes Entonces
Asignar el nombre del mes correspondiente en la variable nombreDelMes
Asignar la cantidad de días que le corresponend al mes seleccionado
SINO
Asignar null a las variables nombreDelMes y cantidadDeDias
Si nombreDelMes Y cantidadDeDias son null Entonces
Mostrar un mensaje de error: Ingrese un número entre 1 y 12
SINO
Mostrar el siguiente mensaje: "El mes seleccionado es" + nombreDelMes + " y tiene " + cantidadDeDias + " de días"
Utilizar la siguiente lista de datos para resolver el ejercicio:
Enero	31 días
Febrero	28/29 días
Marzo	31 días
Abril	30 días
Mayo	31 días
Junio	30 días
Julio	31 días
Agosto	31 días
Septiembre	30 días
Octubre	31 días
Noviembre	30 días
Diciembre	31 días*/


var numeroDeMes = prompt('Por favor ingrese un número de mes');
var nombreDelMes = null;
var cantidadDeDias = null;

switch (numeroDeMes) {
    case '1':
        nombreDelMes = 'enero';
        cantidadDeDias = '31 días';
        break;
    case '2':
        nombreDelMes = 'febrero';
        cantidadDeDias = '28/29 días';
        break;
    case '3':
        nombreDelMes = 'marzo';
        cantidadDeDias = '31 días';
        break;
    case '4':
        nombreDelMes = 'abril';
        cantidadDeDias = '30 días';
        break;
    case '5':
        nombreDelMes = 'mayo';
        cantidadDeDias = '31 días';
        break;
    case '6':
        nombreDelMes = 'junio';
        cantidadDeDias = '30 días';
        break;
    case '7':
        nombreDelMes = 'julio';
        cantidadDeDias = '31 días';
        break;
    case '8':
        nombreDelMes = 'agosto';
        cantidadDeDias = '31 días';
        break;
    case '9':
        nombreDelMes = 'septiembre';
        cantidadDeDias = '30 días';
        break;
    case '10':
        nombreDelMes = 'octubre';
        cantidadDeDias = '31 días';
        break;
    case '11':
        nombreDelMes = 'noviembre';
        cantidadDeDias = '30 días';
        break;
    case '12':
        nombreDelMes = 'diciembre';
        cantidadDeDias = '31 días';
        break;
    default:
        nombreDelMes = null;
        cantidadDeDias = null;
        break;
}
if (nombreDelMes == null && cantidadDeDias == null) {
    console.log('No sea corneta e ingrese un número del 1 al 12');
} else {
console.log('El mes seleccionado es ' + nombreDelMes + " y tiene " + cantidadDeDias);
}