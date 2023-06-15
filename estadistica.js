const Estadistica ={};

Estadistica.averageArraySalary = function averageArraySalary(arr){
    let addition = 0
    for(let i=0; i < arr.length; i++){
        addition = addition + arr[i];
    }
    const average = addition / arr.length;

return average;
}

Estadistica.calcularPromedio = function calcularPromedio(array) {
  const sumarTodosElementos = (valorAcumulado, nuevoValor) => {
    return valorAcumulado + nuevoValor;
  };

  const sumaArray = array.reduce(sumarTodosElementos);

  const promedio = sumaArray / array.length;
  console.log(promedio);
  return promedio;
}

Estadistica.isNumbersOdd = function isNumbersOdd(numero){
    if((numero % 2) === 0){
        console.log('numero par');
    }else{
        console.log('numero impar')
    }
    return;
}

Estadistica.isEven = function isEven(arr) {
  return arr.length % 2 === 0;
}
Estadistica.isOdd = function isOdd(arr) {
  return arr.length % 2 !== 0;
}

Estadistica.calcularMediana = function calcularMediana(arr) {
  const list = Estadistica.orderList(arr);
  const listIsEven = Estadistica.isEven(arr);

  if (listIsEven) {
    const halfEvenList = arr.length / 2 - 1;
    const halfEvenList2 = arr.length / 2;
    const halfList = [];
    halfList.push(arr[halfEvenList]);
    halfList.push(arr[halfEvenList2]);
    const medianListEven = Estadistica.calcularPromedio(halfList);
    return medianListEven;
  } else {
    const halfListOdd = Math.floor(arr.length / 2);
    const medianListOdd = arr[halfListOdd];
    console.log(halfListOdd);
    console.log(medianListOdd);
    return medianListOdd;
  }
}

Estadistica.calcularPromedio = function calcularPromedio(array) {
  const sumarTodosElementos = (valorAcumulado, nuevoValor) => {
    return valorAcumulado + nuevoValor;
  };

  const sumaArray = array.reduce(sumarTodosElementos);

  const promedio = sumaArray / array.length;
  console.log(promedio);
  return promedio;
}

Estadistica.orderList = function orderList(disorderList) {
  function orderListSort(valorAcumulado, nuevoValor) {
    if (valorAcumulado > nuevoValor) {
      return 1;
    } else if (valorAcumulado === nuevoValor) {
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      return -1;
    }
  }
  // const list = disorderList.sort((a,b)=>a-b);
  //  el codigo de sort se resume en una sola linea.

  const list = disorderList.sort(orderListSort);
  return list;
}

Estadistica.operatorFashion = function operatorFashion (arr1){
  const listCount = {};

  for (let i=0; i < arr1.length; i++){
    const element = arr1[i];
    if (listCount[element]){
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  }

  const listarr = Object.entries(listCount)
  const orderList = orderListBidimensional(listarr, 1)
  const listMaxNumber = orderList[orderList.length -1];
  console.log('la moda es:' + listMaxNumber[0]);
  const moda = listMaxNumber[0];
  return moda;
}

Estadistica.orderListBidimensional = function orderListBidimensional(disorderList) {
    function orderListSort(valorAcumulado, nuevoValor) {
      return valorAcumulado[1] - nuevoValor[1];
    }
    const list = disorderList.sort(orderListSort);
  
    return list;
  }