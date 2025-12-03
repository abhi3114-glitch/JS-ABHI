const score = 10;
console.log(score);

const balance=new Number(100);

console.log(balance);
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//precison value chahiye hoti hai

const otherNumber=4234.66789;
console.log(otherNumber.toPrecision(4));//total digits chahiye hoti hai 
//4 digits chahiye toh 42.57 ho jayega
const hundred=100000000;// 10,00,000 100,000,000
console.log(hundred.toLocaleString(`en-IN`));//1,00,00,000
//max and min value
// 
Number.MAX_VALUE
Number.MIN_VALUE

//---------------------Maths----------------------------------

//bydefault aati hai Math object

console.log(Math);//object hai ye jisme kai sare methods hote hain
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-100));//100
console.log(Math.round(4.6));//5
console.log(Math.round(4.4));//4
console.log(Math.ceil(4.4));//5
console.log(Math.floor(4.7));
console.log(Math.min(0,150,30,20,-8,-200));//-200
console.log(Math.max(0,150,30,20,-8,-200));//150);

console.log(Math.sqrt(64));//8
console.log(Math.pow(2,5));//32


console.log(Math.random());//0 to 1 ke beech ka random number dega
console.log((Math.random()*10));//0-9 ke beech ka random number dega
console.log(Math.floor(Math.random()*10)+1);//1-10 ke beech ka random number dega
console.log(Math.floor(Math.random()*100)+1);//1-100 ke beech ka random number dega


const max=50;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);//10-50 ke beech ka random number dega //(max-min+1) isliye kiya taki max bhi include ho jaye


