//Dates

let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // String representation
console.log(myDate.toDateString()); // Date only
console.log(myDate.toISOString()); // ISO format
console.log(myDate.toLocaleString()); // Localized format
console.log(myDate.getFullYear()); // Current year

let myCreationDate = new Date('2025,12,3'); // Specified date
console.log(myCreationDate.toDateString());

//Timestamps

let myTimeStemp = Date.now();
console.log(myTimeStemp); // Current timestamp in milliseconds since Jan 1, 1970
console.log(myCreationDate.getTime()); // Timestamp of the specified date

//months are 0 based index
let newDate = new Date();
console.log(newDate.getMonth()); // Current month (0-11)
newDate.setMonth(11); // Set month to December
console.log(newDate.getMonth()); // Updated month (11 for December)
console.log(newDate.getDay()); // Day of the week (0-6, 0 for Sunday)
