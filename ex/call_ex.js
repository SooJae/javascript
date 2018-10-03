const bruce = {name: "Bruce"};
const madline = {name: "Madline"};


function greet() {
    return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(bruce));



function update(birthYear, occupation) {
    this.birthYear=birthYear
    this.occupation=occupation
}

update.call(bruce, 1949,'singer');
update.call(madline, 1942, 'actress');


// for(let a in bruce){
//     console.log(a);
// }
console.log(madline);