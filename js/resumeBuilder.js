/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Okechukwu Ochia");
var firstName = "Okechukwu";
var lastName = "Ochia"
var age = 28;
console.log(firstName + " "+ lastName);

var awesomeThoughts = "My name is "+firstName+" "+lastName+" and I am awesome!";
console.log(awesomeThoughts);

var email = "okechukwu.ochia@ucalgary.ca";
var newEmail = email.replace("ucalgary.ca", "gmail.com");
console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("awesome", "fun");
// console.log(funThoughts);
$("#main").append(funThoughts);