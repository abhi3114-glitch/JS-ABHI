//Dates

let myDate = new Date();

console.log(myDate); // Current date and time
console.log(myDate.toString()); // String representation
console.log(myDate.toDateString()); // Date only
console.log(myDate.toISOString()); // ISO format
console.log(myDate.toLocaleString()); // Localized format
console.log(myDate.getFullYear()); // Current year

let myCreationDate = new Date('2025,1,3'); // Specified date
console.log(myCreationDate.toDateString());
// Timestamps

let myTimeStemp = Date.now();
console.log(myTimeStemp); // Current timestamp in milliseconds since Jan 1, 1970
console.log(myCreationDate.getTime()); // Timestamp of the specified date
//dates m o se nhi 1 se start hoti hai
// months are 0 based index

let newDate = new Date();
console.log(newDate.getMonth()); // Current month (0-11)
newDate.setMonth(11); // Set month to December
console.log(newDate.getMonth());// Updated month (10 for November)
newDate.setDate(31); // Set date to 31
console.log(newDate.getDate()); // Updated date (31)
newDate.setFullYear(2023); // Set year to 2023
console.log(newDate.getFullYear()); // Updated year (2023)
console.log(newDate.getDay()); // Day of the week (0-6, 0 for Sunday)
