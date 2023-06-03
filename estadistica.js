const arraySalary= [10,20,30,10,15,50,30,25,15];
const promedio = averageArraySalary(arraySalary);

function averageArraySalary(arr){
    let addition = 0
    for(let i=0; i < arr.length; i++){
        addition += arr[i]
    }
    const average = addition / arr.length;

return average;
} 
   console.log(promedio);