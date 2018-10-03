const arr= [2,3,5,15,-1];

console.log(Math.min.apply(undefined,arr));
console.log(Math.max.apply(null,arr));
console.log(Math.max(...arr));
console.log(Math.min(...arr));
