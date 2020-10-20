/* 
Consigna: Evaluar si un numero es primo o no. Retornar true en caso de serlo y false en caso contrario.

Algoritmo: Primero descarto 0 y 1 que son los casos especiales. 
Luego comienzo a ciclar entre 2 y la mitad del numero que estoy evaluando. Si el resto de dividir el numero por i es 0, significa
que existe al menos un numero distinto de 1 y del mismo numero que sera divisible por el. En este caso, pongo mi variable auxiliar "primo"
en false y salgo del ciclo. De lo contrario, al llegar a la mitad del numero, se saldrá del ciclo y la variable seguirá con el valor 
inicializado en true y podemos afirmar que el numero es primo.
*/

es_primo = (num) => {
  let primo = true;

  if (num == 0 || num == 1) primo = false;
  else {
    let i = 2;
    while (i <= num / 2 && primo == true) {
      if (num % i == 0) primo = false;
      i++;
    }
  }
  return primo;
};

console.log(es_primo(29));
