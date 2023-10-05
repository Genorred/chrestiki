import React, { useEffect, useMemo, useState } from 'react'
import Square from '../../components/UI/square/Square'
import './Game.css'
import MyButton from '../../components/UI/myButton/MyButton'

const Game = () => {
  const squareArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const [squaresX, setSquaresX] = useState([])
  const [squares0, setSquares0] = useState([])

  const [thisMove, setThisMove] = useState('x')
  const [winner, setWinner] = useState(null)
  const [isClearing, setIsClearing] = useState(false)

  const [wins0, setWins0] = useState(0)
  const [winsX, setWinsX] = useState(0)
  const victoryTerms = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ]

  const contains = (where, what) => {
    for (let q = 0; q < where.length; q++) {
      let qlty = 0
      for (let i = 0; i < what.length; i++) {
        if (where[q].includes(what[i]))
          qlty++
      }
      if (qlty >= 3) {
        return true
      }
    }
    return false
  }

  useEffect(() => {
    if (contains(victoryTerms, squaresX)) {
      setWinner('x')
    }
    if (contains(victoryTerms, squares0)) {
      setWinner('0')
    }
  }, [squaresX, squares0])

  useEffect(() => {
    if (winner === 'x') {
      setWinsX(winsX + 1)
    }
    if (winner === '0') {
      setWins0(wins0 + 1)
    }

  }, [winner])

  return (
    <div className='game-container'>
      <div className='game-area'>
        <div className='header'>
          <h3 className='players-name'>{sessionStorage.getItem('firstName')}</h3>
          <div className='counter'>
            <h3>Счёт</h3>
            <h3>{winsX}:{wins0}</h3>
          </div>
          <h3 className='players-name'>{sessionStorage.getItem('secondName')}</h3>
        </div>
        <div className='squares-container'>
          {squareArray.map((number) => {
            return <Square key={number} number={number}
              squaresX={squaresX} setSquaresX={setSquaresX}
              squares0={squares0} setSquares0={setSquares0}
              thisMove={thisMove} setThisMove={setThisMove}
              winner={winner} setWinner={setWinner}
              isClearing={isClearing} setIsClearing={setIsClearing} />
          })}
        </div>
        <MyButton onClick={() => setIsClearing(true)}>Очистить поле</MyButton>
      </div>
    </div>
  )
}
export default Game
