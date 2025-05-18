let buttonRemove = document.getElementById("deleteButton")
let addCard = document.getElementById("addButton")
let returnCard = document.getElementById("againButton")
let editCard = document.getElementById("editButton")
let viewCard = document.getElementById("viewButton")
let deleteCard = document.getElementById("deleteButtonCard")

let currentTool = "view"
let counter = 0

editCard.addEventListener('click', function() {currentTool = "edit"})
viewCard.addEventListener('click', function() {currentTool = "view"})
deleteCard.addEventListener('click', function() {currentTool = "delete"})

returnCard.addEventListener('click', function() {
    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("active")
        card.querySelector('.front').classList.remove("hide")
        card.querySelector('.back').classList.add("hide")
    })

})

buttonRemove.addEventListener('click', function (){
    document.querySelectorAll(".card").forEach(box => {
        box.remove();
    })
})



addCard.addEventListener('click', function () {
    let textInput = document.getElementById("textInput").value
    let transInput = document.getElementById("translationInput").value
    document.getElementById("textInput").value = ""
    document.getElementById("translationInput").value = ""
    if (textInput.length == 0 || transInput.length == 0){
        alert("Заполните все поля.")
        return
    }
    counter += 1
    toHtml(
    `<div class="card" id="${counter}">
      <label class="front">${textInput}</label>
      <label class="back hide">${transInput}</label>
    </div>
    `)

    const cards = document.querySelectorAll('.card[id]');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (currentTool == "view"){
                const isActive = card.classList.toggle('active');
                const front = card.querySelector('.front');
                const back = card.querySelector('.back');
                if (isActive) {
                    if (front) front.classList.add('hide');
                    if (back) back.classList.remove('hide');
                } else {
                    if (front) front.classList.remove('hide');
                    if (back) back.classList.add('hide');
                }
            } else if(currentTool == "edit"){
                const front = card.querySelector('.front');
                const back = card.querySelector('.back');
                front.innerHTML = prompt("Введите текст")
                back.innerHTML = prompt("Введите перевод")
            } else if (currentTool == "delete"){
                card.remove()
            }
        });
    })
})

function toHtml(element){
    document.querySelector(".cards").innerHTML += element
}
