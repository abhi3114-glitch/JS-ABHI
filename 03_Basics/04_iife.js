// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// // ( (name) => {
// //     console.log(`DB CONNECTED TWO ${name}`);
// // } )('abhi')


(function rakshit(username){

    console.log(username)
})(`diya`);// arguments backtracks k andar dalna

// ((username)=>{

//     console.log(`${username}`)
// })(`Diya`);