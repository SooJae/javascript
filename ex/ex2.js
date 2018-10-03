const player={name:'Tomas', rank:'Midship', age:25};

for(let aa in player){
    console.log(`${aa} : ${player[aa]} `);

}

const hand = [20,50,60];
for(let aa of hand)
console.log(`you ${aa}!`);

let x=2, y=10, z;
z=(x++,y++);

console.log(z);