const btnFiveLion= document.querySelector('.big-five-buttonlion')
const btnFiveLeopard= document.querySelector('.big-five-buttonleop')
const btnFiveElephant= document.querySelector('.big-five-buttonelep')
const btnFiveRhino= document.querySelector('.big-five-buttonrhin')
const btnFiveBuffalo= document.querySelector('.big-five-buttonbuff')
const displayText = document.querySelector('.text')
let newLi = document.createElement("li")
let abc = document.getElementById("spotted-animals-list").getElementsByTagName("ul")[0]


// abc.appendChild(newLi)
// newLi.innerHTML= "Lion"





btnFiveLion.addEventListener('click', function(){
    const textAdd = "  Lion";
    displayText.innerHTML = textAdd
})
btnFiveLeopard.addEventListener('click', function(){
    const textAdd = "  Leopard";
    displayText.innerHTML = textAdd
})
btnFiveElephant.addEventListener('click', function(){
    const textAdd = "  Elephant";
    displayText.innerHTML = textAdd
})
btnFiveRhino.addEventListener('click', function(){
    const textAdd = "  Rhino";
    displayText.innerHTML = textAdd
})
btnFiveBuffalo.addEventListener('click', function(){
    const textAdd = "  Buffalo";
    displayText.innerHTML = textAdd
})






