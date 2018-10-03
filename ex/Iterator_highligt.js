class Log {
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({ message, timestamp:Date.now() });
    }
    
    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();

log.add("first day at sea");
log.add("first day at sea3");
log.add("first day at sea4");
log.add("first day at sea2");

//console.log(log)

// for(let entry in log.messages){
//     console.log(entry,log.messages[entry]);
// }

for(let entry of log){
    console.log(`${entry.message}@ ${entry.timestamp}`);
}


// 0 { message: 'first day at sea', timestamp: 1538564103665 }
// 1 { message: 'first day at sea3', timestamp: 1538564103665 }
// 2 { message: 'first day at sea4', timestamp: 1538564103665 }
// 3 { message: 'first day at sea2', timestamp: 1538564103665 }
// first day at sea@ 1538564103665
// first day at sea3@ 1538564103665
// first day at sea4@ 1538564103665
// first day at sea2@ 1538564103665

// const it = log.messages();
// it.next();