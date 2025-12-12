a=12
b=22
c=30

if (true) {
   let a = 10
   const b = 20;
}
console.log(a);
console.log(b);
console.log(c);



function printUsername(){
    
    console.log(username);
}
printUsername()
const username = "Rashi"
const website = "Youtube"

function one(){
    const username = "Abhi"

    function two(){
        const website = "Github"
        console.log(username);
    }
    two()
    console.log(website);

     

}
// console.log(username);
one()



if (true) {
    const username = "abhi"
    if (username === "abhi") {
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
}

console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}
console.log(addone(10));





const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));


