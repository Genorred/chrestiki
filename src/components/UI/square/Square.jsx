import React, { useState, useEffect } from 'react'
import cl from './Square.module.css'
import imgX from '../../../images/X.png'
import img0 from '../../../images/0.png'

const Square = ({ number, squaresX, setSquaresX,
    squares0, setSquares0, thisMove, setThisMove,
    winner, setWinner, isClearing, setIsClearing }) => {

    const [isX, setIsX] = useState(false)
    const [is0, setIs0] = useState(false)
    const [wasMarked, setWasMarked] = useState(false)
    const markElement = () => {
        if (!wasMarked) {
            if (thisMove === 'x') {
                setIsX(true)
                setThisMove('0')
                setWasMarked(true)
                { setSquaresX([...squaresX, number]) }
            } else {
                setIs0(true)
                setThisMove('x')
                setWasMarked(true)
                { setSquares0([...squares0, number]) }
            }
        }
    }
    const clear = () => {
        setThisMove('x')
        setWasMarked(false)
        setIsX(false)
        setIs0(false)
        setSquaresX([])
        setSquares0([])
        setWinner('')
    }
    useEffect(() => {
        if (winner) {
            setWasMarked(true)
        }
    }, [{ winner }])
    useEffect(() => {
        if (isClearing)
            clear()
        setIsClearing(false)
    })
    return (
        <div className={cl.square} onClick={markElement}>
            {isX
                ? <img src={imgX} alt="" className={cl.imgX} />
                : ''
            }
            {is0
                ? <img src={img0} alt="" className={cl.img0} />
                : ''
            }

        </div>
    )
}

export default Square