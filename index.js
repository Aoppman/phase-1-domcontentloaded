// Your code goes here

document.addEventListener("DOMContentLoaded", changeText);

//console.log("This will appear before DOM content loaded is triggered!")


const text = document.getElementById('text')

function changeText() {
    text.textContent = "This is really cool!"
}
