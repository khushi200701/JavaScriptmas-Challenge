// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const SkyBtn = document.getElementById("Sky")

snowBtn.addEventListener('click', function() {
    body.classList.remove('christmas')
    body.classList.remove('Sky')
    body.classList.add('snow')
    greeting.innerText = '☃️ Merry Christmas!'
})

christmasBtn.addEventListener('click', function() {
    body.classList.remove('snow')
    body.classList.remove('Sky')
    body.classList.add('christmas')
    greeting.innerText = '🎅 Merry Christmas!'
})

// Stretch goals:
// - Add more themes!

SkyBtn.addEventListener('click', function() {
    body.classList.remove('snow')
    body.classList.remove('chritmas')
    body.classList.add('Sky')
    greeting.innerText = '☁️ Merry Christmas!'
})
