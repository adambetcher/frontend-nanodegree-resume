$("#main").append(["Adam Betcher"]);
var awesomeThoughts = "I am Adam and am AWESOME!";
console.log(awesomeThoughts);
var email = "cameron@udacity.com";
var newEmail = email.replace("udacity", "gmail");
console.log(email);
console.log(newEmail);
var funThoughts = awesomeThoughts.replace("AWESOME", "fun");
console.log(funThoughts);
$("#main").append(funThoughts);
var myName = HTMLheaderName.replace("%data%", "Adam J Betcher");
var myRole = HTMLheaderRole.replace("%data%", "Software Architect");
$("#main").prepend(myName);
$("#main").append(myRole);