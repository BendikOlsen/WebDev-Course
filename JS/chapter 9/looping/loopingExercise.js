//While Loops Problem Set

//1. Print all numbers between -10 and 19

var count = -10

while (count > -11 && count < 20){
    console.log("Count is: " + count);
    count++;
}

console.log("---------------------------------------------------------")

//2. Print all even numbers between 10 and 40
var count = 10

while (count > 9 && count <41){
    if(count % 2 === 0)
    console.log("Count is: " + count);
    count++;
}
console.log("---------------------------------------------------------")

//3. Print all odd numbers between 300 and 333
var count = 300

while (count > 299 && count < 334){
    if(count % 2===1)
    console.log("Count is: " + count);
    count++;
}
console.log("---------------------------------------------------------")

//4.print all numbers divisible by 5 and 3 between 5 and 50

var count = 5

while (count <= 50){
    if(count % 5 === 0  && count % 3 === 0)
    console.log("Count is: " + count);
    count++;
}