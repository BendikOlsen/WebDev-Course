//rewrite this to a forLoop that print out number divisible by 3 between -100 and 100

var numbers = [1,2,3,4,5,6,7,8,9,10]
var colors  = ["red", "orange", "yellow", "green"]

numbers.forEach(function(color  ){
    if(color% 3 === 0) {
        console.log(color)
    }
})

//rewritten code from .forEach to forLoop
for (var i = -100; i <= 100; i++){
    if(i % 3 === 0)
    console.log(i)
}