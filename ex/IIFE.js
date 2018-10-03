// const message = (function(){
//     const secret = "I'm grute!";
//     return `the secret is ${secret.length} characters long.`;
// })();
// console.log(message);



// const f = (function() {
//     let count=0;
//     return function() {
//         return `I have been called ${++count} times(s)`;
//     }
// })();
// console.log(f());
// console.log(f());
// console.log(f());



// count 증가 X
const f = (function() {
    let count=0;
    
        return `I have been called ${++count} times(s)`;
    

});
console.log(f());
console.log(f());
console.log(f());
