const name="abhi chauhan";
const repoCount=43;
//console.log(name+ " has "+ repoCount+" repositories");
//template string or template literal
//console.log(`${name} has ${repoCount} repositories`);

//use backtick ` ` string interpolation

const gameName=new String(`KAI`);
console.log(gameName[0]);
console.log(gameName.__proto__);//prototype of string
console.log(gameName.length);//property
console.log(gameName.toUpperCase());//method
console.log(gameName.toLowerCase());//method
console.log(gameName.includes(`K`));//method
console.log(gameName.charAt(2));//method
console.log(gameName.indexOf(`I`));//method
console.log(gameName.startsWith(`K`));//method
console.log(gameName.endsWith(`I`));//method
console.log(gameName.split(""));//method
console.log(gameName.replace(`KAI`,`KABIR`));//method
//strings are immutable in javascript
//all the string methods return a new string
const newString=gameName.substring(0,2);
console.log(newString);
console.log(gameName);//original string remains same
const anotherString=gameName.slice(-3,-1);
console.log(anotherString);
console.log(gameName.repeat(3));//method
console.log(gameName.trim());//method
const message="   hello world   ";
console.log(message.trim());

