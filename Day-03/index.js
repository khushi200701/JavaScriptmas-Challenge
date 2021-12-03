const greeting = document.getElementById("greeting")
const bg = document.getElementById("bg")
const container = document.querySelector(".container")
const btn = document.getElementById("btn")
const optionBtn = document.getElementById("option-btn")

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.style.fontFamily = "Dancing Script"; 
  greeting.style.fontWeight = "heavy";
  greeting.style.fontSize = "55px"; 
  container.style.color = "#C7375F";
  container.style.background = "#f8fff0";
  bg.style.background = "url('christmas.gif')";
  greeting.innerHTML = "🎄 Merry Christmas! 🎅🏽";
}
btn.addEventListener("click", fix);

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
function newYear() {
  greeting.style.fontFamily = "Mountains of Christmas";
  greeting.style.fontWeight = "heavy";
  greeting.style.fontSize = "55px";
  container.style.color = "#007c9c";
  container.style.background = "url('newyr.gif') no-repeat" ;
  container.style.backgroundSize = "cover";
  bg.style.background = "#007c9c";
  greeting.innerHTML = "🎉 Happy New Year 🥳";
}
optionBtn.addEventListener("click", newYear);






