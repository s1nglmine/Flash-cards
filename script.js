let buttonRemove = document.getElementById("deleteButton")
let allCards = document.querySelectorAll(".card")

buttonRemove.addEventListener('click', function (){
    allCards.forEach(box => {
        box.remove();
    })
})
