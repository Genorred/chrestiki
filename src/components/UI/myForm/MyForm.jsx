import React, { useEffect, useState } from 'react'
import MyInput from "../myInput/MyInput";
import cl from './MyForm.module.css'
import MyButton from '../myButton/MyButton';
import { Link } from 'react-router-dom';

const MyForm = ({ firstName, setFirstName, secondName, setSecondName }) => {
  const [input1IsLocked, set1InputIsLocked] = useState(false)
  const [input2IsLocked, set2InputIsLocked] = useState(false)
  const changeValue1 = (e) => {
    if (e.target.value.length>50) {
      set1InputIsLocked(true)
      return
    }
    setFirstName(e.target.value)
  }

  const changeValue2 = (e) => {
    if (e.target.value.length>50) {
      set2InputIsLocked(true)
      return
    }
    setSecondName(e.target.value)
  }
  return (
    <div className={cl.myForm}>
      <MyInput value={firstName} onChange={changeValue1} type='text' placeholder='Имя игрока за крестики' className={cl.myFormInput}></MyInput>
      <MyInput value={secondName} onChange={changeValue2} type='text' placeholder='Имя игрока за нолики' className={cl.myFormInput}></MyInput>
      <Link to='/game'>
        <MyButton onClick={() => {
          sessionStorage.clear()
          sessionStorage.setItem('firstName', firstName)
          sessionStorage.setItem('secondName', secondName)
        }}>Старт</MyButton>
      </Link>
    </div>
  )
}

export default MyForm
