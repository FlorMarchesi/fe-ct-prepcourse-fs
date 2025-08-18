function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (n < 1){
    return 0;
  }else {
    let suma = 0;
    for (let i = 1; i <= n; i++){
      suma += i;
    }
    return suma;
  }
}

module.exports = sumarHastaN;
