function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero < 1) {
    return false;
  }
  while(numero > 1){
    if (numero % 2 !== 0) {
      return false;
    }
    numero = numero / 2;
  }
  return true;
}
//Divide numero por 2 hasta que sea igual a 1. Si no es divisible, entonces no es potencia de 2.

module.exports = esPotenciaDeDos;
