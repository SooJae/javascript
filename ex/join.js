const arr = [1, "hello", "world", 4 ,5];
delete arr[3];
console.log(arr.join());            
console.log(arr.join(' '));           
console.log(arr.join(' -- '));      
console.log(arr);


// 1,hello,world,,5
// 1 hello world  5
// 1 -- hello -- world --  -- 5
// [ 1, 'hello', 'world', <1 empty item>, 5 ]
