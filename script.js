let player = {
    name : "Player",
    chips : 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
 let messageEl = document.getElementById("message-el")
let sumEl =  document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) +1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
    console.log(randomNumber)
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards:" 
    sumEl.textContent = "Sum: " + sum
for(let i = 0; i <cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}
    if(sum <= 20){
        message = "do you want a new card?"
       } else if (sum === 21){
        message = "you got blackjack"
           hasBlackJack = true
       } else{
           message= "you are out"
           isAlive = false   
       }
       messageEl.textContent =  message 
    }

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        const card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

/// OBJECTS AND FUNCTIONS PRACTICE
// let person = {
//     name : "hanif",
//     age: 21,
//     country: "nigeria"
    
// }

// function logData(){
// console.log(person.name  + " is " + person.age  +  " years " +  "and lives in "  + person.country )
// }
// logData()

// let age = 12
// function train(){
//     if(age < 6){
//        console.log("ticket is free")
//     } else if(age < 18){
//         console.log(  "child discount")
//     } else if(age<27){
//        console.log("student discount")
//     } else if(age<66){
//         console.log("full price")
//     }else{
//         console.log(" senior discount")
//     }
// }
//  train()
// LOOPS AND ARRAY PRACTICE
// let largeCountries = ["china","india","usa","indonesia","pakistan"]

// for(let i = 0; i < largeCountries.length; i ++){
//     console.log("-" + largeCountries[i])
// }

/// POP,PUSH,SHIFT AND UNSHIFT CHALLENGE
// let largeCountries = ["tuvalu","india","usa","indonesia","monaco"]
// largeCountries.shift("tuvalu")
// largeCountries.unshift("china")

// largeCountries.pop()
// largeCountries.push("pakistan")

// //largeCountries.unshift("nigeria")
// //largeCountries.shift("china")
// console.log(largeCountries)


// /// LOGICAL OPERATORS
// let dayOfMonth = 13
// let weekday = "friday"

// if (dayOfMonth === 13 && weekday === "friday"){
//     console.log("www")
// }

// let hands = ["rock","paper","scissors"]

// function getHand(){
//     let randomIndex = Math.floor(Math.random() * 3) 
//     return hands[randomIndex]
    
// }
 
// console.log(getHand())

// let fruit = ["apple","orange","apple","apple","orange"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf= document.getElementById("orange-shelf")

// function sortFruit(){
//     for(let i = 0; i < fruit.length; i++){
//         if(fruit[i] === "apple"){
//             appleShelf.textContent += "apple"
//         } else if(fruit[i] === "orange"){
//             orangeShelf.textContent += "orange"
//         }
//     }
// }

// sortFruit()