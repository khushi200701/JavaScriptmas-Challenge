const meter = document.getElementById("meter")

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
function FestivityMeter() {
    const today = new Date()
    meter.setAttribute('value', 25 - today.getDate())
}

FestivityMeter()
// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
