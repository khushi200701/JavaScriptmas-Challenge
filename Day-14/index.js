const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const tea = document.getElementById("tea")

btn.addEventListener("click", duplicateElf)
tea.addEventListener("click", giveTea)

function duplicateElf(){
    elf.textContent += "🧝"
    // Task:
   // - ✅Write a function to duplicate the elf when the button is clicked.
   // - ✅See index.css for optional styling challenges.
}
function giveTea(){
    elf.textContent += "☕"
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
