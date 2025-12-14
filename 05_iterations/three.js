// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,"ananya", ["harshit","rakshit"], 4,function diya(){} ,5]

// for (const num of arr) {
//     console.log(num);
// }


// for(const yash of arr){
//     console.log(yash);
// }



// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }



// const harshit={
// 'IN': "India",
// 'USA': "United States of America",
// 'Fr':"France",
// 'IN': "India"
// }

// console.log(harshit)

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const diya of map) {
//     console.log(diya);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const key of myObject) {
    console.log(key);
    
}