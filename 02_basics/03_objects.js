// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Abhi",
    "full name": "Abhi Chauhan",
    [mySym]: mySym,
    age: 18,
    location: "Etawah",
    email: "Abhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym]);

// JsUser.email = "Abhi@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Abhi@microsoft.com"
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    return "Hello JS user";
}

JsUser.greetingTwo = function(){
    return `Hello JS user, ${this.name}`;
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());