// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

const input = document.getElementById("text-input")
const sign = document.getElementById("sign")

input.addEventListener("keyup", function(){
    sign.innerText = "☃️ " + input.value + " 🎅";
})



// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
