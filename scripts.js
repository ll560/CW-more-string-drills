
//Use examples from the slides/presentation to complete the challenges.



//Concatenate two strings together.
let str1 = "I want to go to the park ";
let str2 = "in the morning!";

console.log(str1.concat(str2));


//Concatenate three strings together.
let str3 = "I want to go to the park ";
let str4 = "in the morning ";
let str5 = "everyday! "
 
console.log(str3.concat("in the morning ", str5));

//Search a string for content.
let str6 = "I want a new puppy";
let result = str6.includes("puppy");

console.log(result);


//Replace a values in string.
let str7 = "I want a new dog";
let result2 = str7.replace("dog", "cat");

console.log(result2);
//Use trim on strings.
let str8 = "     Yay, its the weekend!!!       ";
console.log(str8);

console.log(str8.trim().toUpperCase());
//Making strings case sensitive. 
let str9 = "I WANT PIZZA!";

console.log(str9.toLowerCase());

