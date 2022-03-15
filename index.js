
let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = "";

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

let player = {
  name: "Mohamed",
  chips: 165
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
  isAlive = true
  let firstCard = randomCard()
  let secondCard = randomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (var i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  if(sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if(sum === 21) {
    message = "You've got Blackjack"
    hasBlackJack = true
  } else {
    message = "You're out of the game"
    isAlive = false
  }

  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
}

function newCard() {
  if((isAlive === true) && (hasBlackJack === false)) {
    let anotherCard = randomCard()
    sum += anotherCard
    cards.push(anotherCard)
    renderGame()
  }
}

function randomCard() {
  let num = Math.floor(Math.random() * 13 + 1)
  if(num === 1){
    return 11
  } else if(num > 10) {
    return 10
  } else {
    return num
  }
}
