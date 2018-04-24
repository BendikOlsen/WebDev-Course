var todos = ["Buy New Turtle"]

var input = prompt("What would you like to do?")

while (input != "quit"){
    //handle input
    if(input === "list") {
      ListTodos()
    } else if (input === "new") {
        newTodo()
    } else if (input === "delete"){
      deleteTodo()
    }
    //ask again for new input
    var input = prompt("What would you like to do?")
}
console.log("Ok, you quit the app")

function ListTodos(){
    console.log("***********")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo)
    })
    console.log("***********")
}

function newTodo(){
    //ask for new todo
    var newTodo = prompt("Enter new todo")
    //add to todos array
    todos.push(newTodo)
    console.log("Added Todo")
}

function deleteTodo(){
    //ask for the index of todo to be deleted
    var index = prompt("Enter index of todo to delete")
    //delete that todo
    //splice()
    todos.splice(index, 1)
    console.log("Deleted Todo")
}