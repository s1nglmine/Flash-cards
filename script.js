let buttonRemove = document.getElementById("deleteButton")
let addCard = document.getElementById("addButton")
let returnCard = document.getElementById("againButton")
let editCard = document.getElementById("editButton")
let deleteCard = document.getElementById("deleteButtonCard")

let currentTool = "view"
let counter = 0

editCard.addEventListener('click', function() {
    if (currentTool != "edit"){
        currentTool = "edit"
        editCard.style.backgroundColor = "#005a9e"
        deleteCard.style.backgroundColor = "red"
    } else {
        currentTool = "view"
        editCard.style.backgroundColor = "#219FFF"
    }
})
deleteCard.addEventListener('click', function() {
    if (currentTool != "delete"){
        currentTool = "delete"
        editCard.style.backgroundColor = "#219FFF"
        deleteCard.style.backgroundColor = "darkred"
    } else {
        currentTool = "view"
        deleteCard.style.backgroundColor = "red"
    }

})

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
                const text = prompt("Введите текст")
                const translate = prompt("Введите перевод")
                if (text == "" || translate.length == ""){
                    alert("Заполните все поля.")
                    return;
                }
                front.innerHTML = text
                back.innerHTML = translate
                currentTool = "view"
                editCard.style.backgroundColor = "#219FFF"
            
            } else if (currentTool == "delete"){
                card.remove()
            }
        });
    })
})

function toHtml(element){
    document.querySelector(".cards").innerHTML += element
}
