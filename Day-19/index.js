const btn = document.getElementById("btn")
const food = document.getElementById("foodHolder")
btn.addEventListener("click", findYum)

async function findYum(){  
    const item = await fetch("https://foodish-api.herokuapp.com/api/images/dessert")
    const data = await item.json()
    food.innerHTML = `<img src=${data.image} alt="random food image" />`
}

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

