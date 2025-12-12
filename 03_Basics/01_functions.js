
// // // function sayMyName(){
// // // console.log("a");
// // // console.log("b");
// // // console.log("h");
// // // console.log("i");
// // // console.log("s");
// // // console.log("h");
// // // console.log("e");
// // // console.log("k");
// // // }

// // // sayMyName()

// // // function addTwoNumbers(number1, number2){

// // //     console.log(number1 + number2);
// // //  }

// // // addTwoNumbers(3, 5) 

// // function addTwoNumbers(number1, number2){

// //     // let result = number1 + number2
// //     // return result //result k baad kuch bhi likhoge vo execute nhi hoga
// //     return number1 + number2
// // }

// // console.log(addTwoNumbers(3, 5));

// // // const result = addTwoNumbers(3, 5)//variable m function store krwa liya

// // // console.log("Result: ", result); // vo value undefined aayegi jo return hui hai function se


// // function loginUserMessage(username="rashi"){
// //     if(!username){
// //         console.log("PLease enter a username");
// //         return
// //     }
// //     return `${username} just logged in`
// // }

// // console.log(loginUserMessage());


// function calculateCartPrice(val1,val2,...num1){
//      return num1
//  }

// console.log(calculateCartPrice(200,300,400,2000));


// const user1 = {
//     username: "abhi",
//     price: 199
// }
// const user2 = {
//     username: "sam",
//     price: 299
// }

// function handleObject(anychutiaobject){
//     console.log(`Username is ${anychutiaobject.username} and price is ${anychutiaobject.price}`);
// }
// handleObject(user1);
// handleObject(user2);

// handleObject({
//      username: "sam",
//      price: 399
//  })



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(genduArray){
    return genduArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 700, 500, 1000]));