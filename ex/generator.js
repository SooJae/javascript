// function *rainbow(){
//     yield 'red';
//     yield 'orange';
//     yield 'yellow';
//     yield 'green';
//     yield 'blue';
//     yield 'indigo';
//     yield 'violet';
// }

// const it = rainbow();

// for(let color of rainbow()){
//     console.log(color);
// }

function* interrogate(){
    const name = yield "What is your name";
    const color = yield "What is your favorite color";
    return `${name}'s favorite color is ${color}.`;
}

const it = iterrogate()