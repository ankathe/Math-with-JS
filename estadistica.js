console.group('promedioConFor');
const arraySalary= [10,20,30,10,15,50,30,25,15];
const promedio = averageArraySalary(arraySalary);

function averageArraySalary(arr){
    let addition = 0
    for(let i=0; i < arr.length; i++){
        addition = addition + arr[i];
    }
    const average = addition / arr.length;

return average;
} 
console.log(averageArraySalary([15,15,15]));

console.groupEnd('promedioConFor');

console.group('promedioConMetodoReduce');

const array= [10,20,30,10,15,50,30,25,15];

const suma = array.reduce((acc, item) =>{
    return acc = (acc + item)/item;
});
console.log(suma);

console.groupEnd('promedioConMetodoReduce');

