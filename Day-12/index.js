const input = document.getElementById("input")
const btn = document.getElementById("btn")
const rem = document.getElementById("rem")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.
function printList(){
    for(let i=0;i<guests.length;i++)
    {
        guestList.innerHTML += '<li>'+guests[i]+'</li>';
    }
}
printList();

btn.addEventListener("click",function addGuest(){
    guests.push(input.value);
    guestList.innerHTML += '<li>'+guests[guests.length-1]+'</li>';    
} )

rem.addEventListener("click",  function remEvil (){
    
    const index = guests.indexOf("Evil Relative");
    if (index > -1) {
        guests.splice(index, 1);
    }
    
    guestList.innerHTML = '';
        guestList.innerHTML += '<li>Me</li>';
        guestList.innerHTML += '<li>Cat</li>';
    printList();
})

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


