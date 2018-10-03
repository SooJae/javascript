// const arr =[1,2,3,4,5];
// delete arr[2];
// arr.map(x=>arr[x]);

// console.log(arr.join(''));


// var arr = [3, 5, 7];
// arr.foo = "hello";

// for (var i in arr) {
//    console.log(i); // logs "0", "1", "2", "foo"
// }

// for (var i of arr) {
//    console.log(i); // logs "3", "5", "7"
//     //it is does not log "3", "5", "7","hello"
// }



var euros = ["이수재", "천재", "재수"]; 
var sum = euros.reduce( (total, amount)=>`${total}. ${amount}`
);
console.log(`[${sum}]`); // 118.11