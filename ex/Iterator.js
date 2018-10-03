require('core-js/fn/array/values');

const book = ["Ipsum id aliquip",
" non tempor aute",
" nisi officia sunt",
" sit ullamco aute"
," reprehenderit nulla.",];

//console.log([...book]);

const it = book.values();

console.log(it.next());
console.log(it.next());
console.log(it.next());

// let current = it.next();
// while(!current.done){
//     console.log(current.value);
//     current = it.next();
// }

