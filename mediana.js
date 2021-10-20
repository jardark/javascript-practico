function calcularMediaAritmetica(lista) {  //El método "reduce" y la función que se le pasa como parámetro permiten recorrer el array y sumar sus elementos  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista0 = [
    100,
    200,
    500,
    400000000,
    1000,
    10000000,
  ];

  lista1 = lista0.sort(   //El método ".sort" y la función que se le pasa como parémetro permiten ordenar un array de números ascendentemente 
    function compareNumbers(a, b) {
        return a - b;
      }
  );
  


  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }