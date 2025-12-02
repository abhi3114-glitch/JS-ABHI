//primitive 

// 7 primitive data types in JavaScript
//1. number
//2. string
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. bigint



//non-primitive (reference) data type
//8. object
//1. array
//2. function
//3. object literal


/*Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.*/


        /*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.*/




/*JavaScript dynamically typed language hai. Iska matlab hai ki variables ka type (jaise string, number, boolean, etc.) runtime par determine hota hai, na ki compile time par.
Example =>
let variable = 10; // Abhi variable ka type 'number' hai
console.log(typeof variable); // Output: 'number'

variable = "Hello"; // Ab variable ka type 'string' ho gaya
console.log(typeof variable); // Output: 'string'*/

/*In statically typed languages like Java or C++, aapko variable declare karte waqt uska type specify karna padta hai, aur wo type compile time par check hota hai.
Example in Java =>
int number = 10; // 'number' variable ka type 'int' hai
number = "Hello"; // Ye error dega kyunki aap 'int' type variable mein 'string' assign kar rahe hain*/


/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/



//-----------------------memory---------------------------------------

// stack memory vs heap memory
//primitive data types are stored in stack memory
//non-primitive data types are stored in heap memory

let name="abhi";//primitive data type string stored in stack memory
let anotherName=name;//copy by value
console.log(anotherName);
anotherName="abhi verma";
console.log(anotherName);
console.log(name);//original value remains same
//in primitive data types copy by value hota hai

let user={//non-primitive data type object stored in heap memory
    name:"abhi",
    age:23
};
let anotherUser=user;//copy by reference
console.log(anotherUser);
anotherUser.name="abhi verma";
console.log(anotherUser);
console.log(user);//original value bhi change ho gaya
//in non-primitive data types copy by reference hota hai