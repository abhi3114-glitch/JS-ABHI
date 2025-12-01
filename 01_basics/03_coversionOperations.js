let score=1 // agar mai null krdu toh kya hoga
console.log(typeof score);//number
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

//"33">>33
//"33abc">>NaN
//true>>1
//false>>0
//null>>0
//undefined>>NaN

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1>>true
//0>>false
//"abhi">>true
//"">>false
//null>>false
//undefined>>false
//NaN>>false

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//**************************************OPERATIONS**************************************************

let value=34
let negValue= -value
console.log(negValue);
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(5%2)

let str1="hello"
let str2="abhi"
console.log(str1+str2);
console.log(str1+" "+str2);
str3=str1+" "+str2
console.log(str3);


console.log(`1`+2)
console.log(1+`2`)
console.log(`1`+`2`)
console.log(`1`+2+2)
console.log(1+2+`2`)
console.log(`1`+(2+2))
console.log(true)
console.log(+true)
console.log(+false)

let num1, num2, num3=2 + 2;
let gameCounter=100
gameCounter++
console.log(gameCounter);
