/*Crear un documento con el nombre ej97.js
Mostrar en consola los números desde el 1000 hasta el 0
Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
Ejemplo:

**1000**
999
998
997
996
995
994
993
992
991
**990**
989
988
987
986
985
984
983
982
981
**980**
979
...
**0**
*/


for (var numero = 1000; numero >= 0; numero --) {
    if (numero%10 ==0) {
        console.log('**'+numero+'**');
    } else { 
        console.log(numero);
    }
}