/* Consigna: Realice una función que recibe como entrada un número y retorne:
a) “I’m” sí el número es múltiplo de 7
b) “Nobly” si es múltiplo de 5
c) “I’m Nobly” si es múltiplo de 5 y 7  

Algoritmo: Utilizo el operador que calcula el resto de una división para evaluar si el valor de entrada es divisible por 7, o por 5. 
Si es divisible por ambos se concatena la respuesta de los dos if, si no es divisible por ninguno de ellos, devuelve un str vacio.
*/

multiplo = (num) => {
  let str = "";
  if (num % 7 == 0) str += "I'm ";
  if (num % 5 == 0) str += "Nobly";
  return str;
};

console.log(multiplo(770));
