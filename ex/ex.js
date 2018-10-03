const obj={};

obj["not an identifier"] =3;
console.log(obj["not an identifier"]);


const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];
obj.SIZE =2;

console.log(obj[SIZE]);
console.log(obj.SIZE);


const a4 = {
    b: {name:"Ruby", hardness:9},
    c: {name:"Diamond", hardness:10},
    d: {name:"Topaz", hardness:8},
}

console.log(a4["b"]["name"]);