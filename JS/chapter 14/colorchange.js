var button = document.querySelector("button")
var body = document.querySelector("body")

//button click switch between white and purple
button.addEventListener("click", function () {
    if (button) {
    body.style.background = "purple";
    } else {
    body.style.background = "white";
    }
    button = !button;
}) ;
