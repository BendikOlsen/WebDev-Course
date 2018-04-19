var age = Number (prompt("how old are you?"));

if(age < 0){
    console.log("Hey Boss. Can I kick this baby?");
}

if(age < 16) {
    console.log("Get out of here dirty teen");
}

if(age == 21) {
    console.log("HAPPY B DAY");
}

if (age % 2 !==0) {
    console.log("Odd one");
}

if(age % Math.sqrt(age) === 0) {
	console.log("Your age is perfect square")
}

else {
    console.log("Come on in. You may drnk.");
}