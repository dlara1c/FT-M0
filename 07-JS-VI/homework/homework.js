// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //var palabra='';
  var primeraLetra=nombre[0].toUpperCase() ;
  ///palabra=nombre;
  for(var i=1; i<nombre.length;i++){
    //console.log('esto vale' +i);
    primeraLetra=primeraLetra+nombre[i];
  }
  return primeraLetra;

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
  

}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2,cb);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
  /*  //codigo funcio bien
  var sumar=numeros.reduce(function(acumulador, elemento,indice){
    acumulador=acumulador+elemento;
    return acumulador;

  });
  */

  
  var casa= numeros.reduce(function(acumulador, elemento, index){
    acumulador=acumulador+elemento;
    return acumulador;
  });
  
  cb(casa);


  /*arraySuma.forEach(function(elemento,index){
    sumatoria=sumatoria+elemento;
  });*/
  

  
/*
  function casa(numeros){
    var sumatoria=0;
    console.log('valor fuera for'+numeros);
    for (var i=0; i<numeros.length; i++){
      console.log('valor for'+numeros);
      sumatoria=sumatoria+numeros[i];
    }
    return sumatoria;*/
    //console.log('valor sumatoria'+sumatoria);
    
  //}

  
  
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento,indice){
    cb(elemento);

  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray=array.map(function(elemento, indice){
    var x= cb(elemento);
    return x;
  });
  return nuevoArray;
  
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArrayFiltrado= array.filter(function(elemento,index){
    if (elemento[0]=='a' || elemento=='A'){
      return elemento;
    }
  });
  return nuevoArrayFiltrado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
