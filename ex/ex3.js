const obj = [2,3,4];



const [b,c,d]=obj;
console.log(d);
console.log(b);
console.log(c);

var object = {
    value1 : '하이'
  , value2 : 'true'
}

for(aa in object){
    console.log(aa);
}

console.log(object["value1"]);

delete object.value1;

for(aa in object){
    console.log(aa);
}