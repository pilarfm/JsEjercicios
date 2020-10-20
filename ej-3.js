/*Consigna: Realizar una función que dado un array de números, en los cuales solo 1 número no se
encuentra repetido. Reconocer de la manera más eficiente de detectar dicho número.
No se puede asumir que la entrada se encuentra ordenada.

Aclaracion: supongo que siempre el array de entrada va a tener 1 elemento no repetido. No se contemplan otros casos.

Algoritmo: Este algoritmo recorre como máximo 1 vez el arreglo original, cuando encuentra el elemento repetido (asumimos unico),
lo devuelve.  
Primero, realizo una copia del arreglo original "arr" en "arr_copy", luego guardo el elemento que estoy evaluando en "num" y 
lo quito de "arr_copy" para no alterar el arreglo original. Luego, pregunto si en lo que quedo del arreglo hay otro valor igual a num.
Si esto es cierto, entonces este elemento está repetido y seguimos en el ciclo. De lo contrario, hemos encontrado el elemento que estamos
buscando! cambiamos bool a falso para que salga del ciclo y retornamos ese elemento.
*/

repetido = (arr) => {
  let num,
    bool = true,
    array_copy,
    i = 0;

  while (i < arr.length && bool == true) {
    arr_copy = arr.slice();
    num = arr[i];
    arr_copy.splice(i, 1);
    if (!arr_copy.includes(num)) {
      bool = false;
    }
    i++;
  }
  return num;
};

arr = [1, 6, 1, 2, 3, 4, 3, 4, 6];
console.log(repetido(arr));
