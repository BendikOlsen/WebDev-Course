var person = {
    name: "Bendik",
    age: 21,
    city: "Horten"
};

person["name"] = "Bendik Stokstad Olsen";
person["age"] += 11;
person["city"] = "Oslo";
console.log(person);

var newPerson = new Object();
newPerson.name = "Jenny";
newPerson.age = "32";
newPerson.city = "Horten";

console.log(newPerson);
