const u1 = {name : 'Cynthia'};
const u2 = {name : 'Jackson'};
const u3 = {name : 'Olive'};
const u4 = {name : 'James'};

const userRoles = new Map([
    [u1,'User'],
    [u2, 'User'],
    [u3, 'Admin'],
])

// console.log(userRoles.get(u2));


//console.log(userRoles);
//Map {
//    { name: 'Cynthia' } => 'User',
 //   { name: 'Jackson' } => 'User',
//{ name: 'Olive' } => 'Admin' }

for(let u of userRoles.keys())
console.log(u.name);
// {name:'Cynthia'}{ name: 'Jackson' }{ name: 'Olive' }

for(let u of userRoles.values())
console.log(u);
// User, User , Admin

for(let ur of userRoles)
console.log(`${ur[0].name}:${ur[1]}`); // ur[0]이면 [object Object] 나옴
// Cynthia:User
// Jackson:User
// Olive:Admin

for(let [u,r] of userRoles.entries())
console.log(`${u.name}:${r}`);

for(let [u,r] of userRoles)
console.log(`${u.name}:${r}`);

console.log([...userRoles.values()])