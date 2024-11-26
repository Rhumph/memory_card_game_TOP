// import { useState } from 'react'
import './App.css'
import './createCards/create_cards.jsx'
import CreateCards from './createCards/create_cards.jsx'

function App() {

  return (
    <div className='app-content'>
      <div className='info-bar'>
        <h1 className='game-title'>R.Humph's Memory Card Game</h1>
        <div className='scoreboard'>
          <CreateCards />
        </div>
      </div>
      <div className='gamebaord'></div>
    </div>
  )
}

export default App
