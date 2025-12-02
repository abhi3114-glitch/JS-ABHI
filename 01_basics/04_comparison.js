console.log(2>1);//true
console.log(2<1);//false
console.log(2>=1);//true
console.log(2<=1);//false
console.log(2==1);//false
console.log(2==2);//true
console.log(2!=2);//false 



console.log(`2`>1);//true
console.log(`02`>1);//true typescript allow hi nhi krta hai 2 data type ko compare krne ke liye
console.log(null>0);
console.log(null==0);
console.log(null>=0);



// == equality operator ye isko change nhi krta hai to 0
//but comparison operators ye isko number me convert kr deta hai



//the reason is that an equality check == and comparison operators (>, <, >=, <=) work differently in JavaScript.
// comparison converts null to a number, treating it as 0.
//thats why null>0 is false, null<0 is false, but null>=0 is true.
//whereas equality check does not convert null to a number. 
//null is only equal to undefined and no other value.
//hence null==0 is false.



console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
//In JavaScript, undefined is not converted to a number in comparisons or equality checks.
//Therefore, undefined>0 is false, undefined<0 is false, and undefined==0 is also false.

//undefined is only equal to null and no other value.




//=== strict equality operator
//== loose equality operator





console.log(2==`2`);//true


console.log(2===`2`);//false


//always avoid such type of confusion use === and !==