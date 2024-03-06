//////1
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] ;

let positiveNum = arr.filter((number)=> number > 0);

let result = positiveNum.reduce(function(sum, current){
  return sum + current;
},0);

console.log(result);
console.log(positiveNum.length);

//////2
let min = arr[0];
let minIndex = 0; 

arr.forEach((elem, index)=>{
  if(elem < min) {
    min = elem;
    minIndex = index; 
  }
})
console.log(min); 
console.log(minIndex);

//////3
let max = arr[0];
let maxIndex = 0; 

arr.forEach((elem, index)=>{
  if(elem > max) {
    max = elem;
    maxIndex = index; 
  }
})
console.log(max); 
console.log(maxIndex);

//////4
let negativeNum = arr.filter((number)=> {
    return number < 0; 
  })
  console.log(negativeNum.length); 

//////5
let num = arr.filter((number)=> {
    if(number % 2 !== 0 && number > 0) {
      return number;
    }
  })
  console.log(num.length); 

//////6
let num = arr.filter((number)=> {
    if(number % 2 === 0 && number > 0) {
      return number;
    }
  })
  console.log(num.length); 

//////7
let num = arr.filter(number => number % 2 === 0 && number > 0); 
let sum = num.reduce((sum, current) => current + sum, 0);

console.log(sum); 

//////8
let num = arr.filter(number => number % 2 !== 0 && number > 0); 
let sum = num.reduce((sum, current) => current + sum, 0);

console.log(sum); 

//////9
let num = arr.filter(number => number % 2 === 0 && number > 0); 
let mult = num.reduce((mul, current) => current * mul, 1);

console.log(mult); 

//////10
let maxElem = arr.reduce((max,current) =>{
    return Math.max(max, current);
  },arr[0]); 
  
  let nullArr = arr.map((item)=> {
    if(item === maxElem) {
      return item;
    } else {
      return 0; 
    }
  }) 
  
  console.log(nullArr);