// import { useState } from 'react'
import './App.css'
import './createCards/create_cards.jsx'
import  GifCardBoard from'./gifCardBoard/gifCardBoard.jsx'

function App() {

  return (
    <div className='app-content'>
      <div className='info-bar'>
        <h1 className='game-title'>R.Humph's Memory Card Game</h1>
        <div className='scoreboard'>
          <GifCardBoard />
        </div>
      </div>
      <div className='gamebaord'></div>
    </div>
  )
}

export default App
