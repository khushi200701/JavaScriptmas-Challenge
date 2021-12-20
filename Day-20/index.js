const eyeColor=document.querySelector("#color")
const noseColor=document.querySelector("#color3")
const buttonColor=document.querySelector("#color2")

function changeEyeColor(){
  const eyes=document.querySelectorAll(".eye");
  eyes.forEach((eye)=>eye.style.backgroundColor=eyeColor.value);
}


function changeNoseColor(){
  const nose=document.querySelector(".nose");
  nose.style.borderColor=`transparent transparent transparent ${noseColor.value}`;
}


function changeButtonColor(){
  const buttons=document.querySelectorAll(".button");
  buttons.forEach((button)=>button.style.backgroundColor=buttonColor.value);
}

eyeColor.addEventListener("change",changeEyeColor);
noseColor.addEventListener("change",changeNoseColor);
buttonColor.addEventListener("change",changeButtonColor);



// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.