//import { useState } from 'react'
import table from './assets/table.jpg'
import './index.css'

function App() {
  let player = {
    name: "Player",
    chips: 200
  }
  let cards = []
  let sum = 0 
  let hasBlackJack = false
  let isAlive = false
  let message = ""
  let messageEl = document.getElementById('messageEl')
  let cardEl = document.getElementById('cardEl')
  let sumEl = document.getElementById('sumEl')
  let playerEl = document.getElementById('playerEl')

  playerEl.textContent = player.name + ": $" + player.chips

  function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if ( randomNumber === 1 ) {
      return 11
    } else if ( randomNumber >= 11 ) {
      return 10
    } else {
      return randomNumber
    }
  }

  function renderGame(){
    cardEl.textContent = "Cards: " 
    for(let i = 1; i < cards.length; i++) {
      cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20){
      message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21){
      message = "Wohoo! You've got Blackjack 🥳"
      hasBlackJack = true
    } else{
      message = "You're out of the game 🤧"
      isAlive = false
    }
    messageEl.textContent = message 
  }

  function newCard(){
    if (isAlive === true && hasBlackJack === false){
      let card = getRandomCard()
    sum += card 
    cards.push(card)
    renderGame()
    }
    
  }

  function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard

    renderGame()
  }
  return (
    <>
      <div className="w-full h-screen">
          <img className='absolute w-full h-full object-cover' src={table} alt="casino table" />
         <div className=' fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[600px] h-[600px] mx-auto'>
          <div className='text-white flex-col py-4 justify-center text-center space-y-5 text-xl'>
            <h1 className='text-[#daa520] '>Blackjack</h1>
            <p id='messageEl'>Want to play a round?</p>
            <p id='cardEl'>Cards:</p>
            <p id='sumEl'>Sum:</p>
            <div className='flex-col py-4 justify-between space-x-10 '>
            <button onClick={startGame} className='bg-[#daa520] text-green-700 border-none rounded-md font-medium cursor-pointer text-md px-8 py-3 h'>START GAME</button>
            <button onClick={newCard} className='bg-[#daa520] text-green-700 border-none rounded-md font-medium cursor-pointer text-md px-8 py-3 h'>NEW CARD</button>
            <p id='playerEl' className='py-10 align-middle'></p>
            </div>
            
          </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
