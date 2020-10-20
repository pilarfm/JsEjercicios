/* Consigna: Dado un string con letras y espacios, invertir el orden de todas las palabras que se
encuentren en lugar impar.
Ejemplo:
Input: Hola que tal, como estas?
Output: aloH que ,lat como ?satse

Aclaración: los arreglos en Javascript comienzan por defecto en posicion 0 (tomado como par), por lo tanto no coincide con el ejemplo dado,
en donde se toma en cuenta el primer elemento como posicion 1 (impar).

Algoritmo: Utilizamos 2 funciones distintas para modularizar el codigo. La funcion reverseString recibe una cadena y le invierte todos los
elementos. La funcion invierte separa el string por sus espacios, guardandolo en un arreglo y luego lo recorre, pregunta si la posicion
es impar, y en ese caso se hace un llamado a "reverseString". Luego, dentro del ciclo for voy retornando como string nuevamente la frase
cambiada, para que quede con el formato propuesto en la consigna.

*/

reverseString = (str) => {
  return str.split("").reverse().join("");
};

invierte = (str) => {
  let rta = "";
  arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    if (i % 2 != 0)
      //la pos es impar
      arr[i] = reverseString(arr[i]);
    rta += arr[i] + " ";
  }
  return rta;
};
console.log(invierte("I love programming and coding stuff"));
