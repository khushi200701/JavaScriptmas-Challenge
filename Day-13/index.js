const btn = document.getElementById("btn")
let food = document.getElementById("food")
let veg = document.getElementById("vegetarian-input")
let vegan = document.getElementById("vegan-input")
let paleo = document.getElementById("paleo-input")
let guests = document.getElementById("num-input")

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

function calcDinner(){
    let dinner = guests.value > 4 ? "Goose" : "Turkey";
    if(paleo.checked == true)
        dinner = "Roasted Chicken"
    if(veg.checked == true)
        dinner = "Nut Roast"
    if(vegan.checked == true)
        dinner = "Broccoli Vegan Pasta"
    
    return dinner;
    }
    
btn.addEventListener("click", function(){
    food.innerText = calcDinner();
})
// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

