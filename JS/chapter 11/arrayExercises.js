//1. exercise
//array with 5 different numbers
var numbers = [22, 67, 33, 96, 88]
//this is undefined, [numbers.lenght = 5] but we can't access bracket 5, because this bracket does not exists. 
console.log(numbers[numbers.length])


//2. exercise
var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
]

//what is the result of this line:
//"mooney" [2] set us up for the 3. group of arrays. [0] is the first in this group.
console.log(friendGroups[2][0])

