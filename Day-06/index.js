const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)
// const box = document.querySelector(".container")
// const music = document.querySelector(".my_audio")

function christmassifyName() {
  // greeting.style.color = "white";
  // greeting.style.fontFamily = "Mountains of Christmas";
  // greeting.style.fontSize = "35px";
  // greeting.innerText = "❄️🎅 Merry Christmas 🎅❄️"
  
  // box.style.backgroundColor = "darkred";
  // document.body.style.background = "url('bg4.gif') no-repeat";
  // document.body.style.backgroundSize = "cover";
  var audio = document.querySelector(".my_audio");
        
  document.body.classList.add("christmassified");
  // document.body.classList.add("my_audio");
  
  if(christmassifierBtn.textContent == "Christmassify")
    {
      christmassifierBtn.textContent = "De-christmassify";
      audio.play();
      window.alert("Turn Up your Volume for some Christmassy Music!");
    }
  else if(christmassifierBtn.textContent == "De-christmassify")
  {
    christmassifierBtn.textContent = "Christmassify";
    document.body.classList.remove("christmassified");
    audio.pause();
  }
  
  setInterval(function(){
    christmassifierBtn.textContent = "Christmassify";
    document.body.classList.remove("christmassified");
    audio.pause();
    },15000);
    // christmassifierBtn.textContent = "Christmassify";
    
   // Task:
  // ✅ Add christmassify class to greeting.
  //✅ Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
}

// Stretch goals:
// ✅ Play Christmas music when Christmas class is added.
// ✅ Remove the Christmas class after a given time.

