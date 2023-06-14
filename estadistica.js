// console.group('promedioConFor');
// const arraySalary= [10,20,30,10,15,50,30,25,15];
// const promedio = averageArraySalary(arraySalary);

// function averageArraySalary(arr){
//     let addition = 0
//     for(let i=0; i < arr.length; i++){
//         addition = addition + arr[i];
//     }
//     const average = addition / arr.length;

// return average;
// }
// console.log(averageArraySalary([15,15,15]));
// console.groupEnd('promedioConFor');

// console.group('promedioConMetodoReduce');

// const array= [10,20,30,10,15,50,30,25,15];

function calcularPromedio(array) {
  const sumarTodosElementos = (valorAcumulado, nuevoValor) => {
    return valorAcumulado + nuevoValor;
  };

  const sumaArray = array.reduce(sumarTodosElementos);

  const promedio = sumaArray / array.length;
  console.log(promedio);
  return promedio;
}

// console.groupEnd('promedioConMetodoReduce');

// const numbers = [1,5,8,10,20,50,30,100,12,0,15,15];

// function isNumbersOdd(numero){
//     if((numero % 2) === 0){
//         console.log('numero par');
//     }else{
//         console.log('numero impar')
//     }
//     return;
// }

// isNumbersOdd(numbers.length);

console.group(calculoDeLaMediana);
const numbers = [1, 15, 8, , 20];
function isEven(arr) {
  return arr.length % 2 === 0;
}
function isOdd(arr) {
  return arr.length % 2 !== 0;
}

function calcularMediana(arr) {
  const list = orderList(arr);
  const listIsEven = isEven(arr);

  if (listIsEven) {
    const halfEvenList = arr.length / 2 - 1;
    const halfEvenList2 = arr.length / 2;
    const halfList = [];
    halfList.push(arr[halfEvenList]);
    halfList.push(arr[halfEvenList2]);
    const medianListEven = calcularPromedio(halfList);
    return medianListEven;
  } else {
    const halfListOdd = Math.floor(arr.length / 2);
    const medianListOdd = arr[halfListOdd];
    console.log(halfListOdd);
    console.log(medianListOdd);
    return medianListOdd;
  }
}

function calcularPromedio(array) {
  const sumarTodosElementos = (valorAcumulado, nuevoValor) => {
    return valorAcumulado + nuevoValor;
  };

  const sumaArray = array.reduce(sumarTodosElementos);

  const promedio = sumaArray / array.length;
  console.log(promedio);
  return promedio;
}

function orderList(disorderList) {
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

console.groupEnd(calculoDeLaMediana);