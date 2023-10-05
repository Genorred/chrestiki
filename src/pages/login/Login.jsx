import React, { useState } from 'react'
import MyForm from '../../components/UI/myForm/MyForm'

const Login = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')

  return (
    <div>
      <MyForm firstName={firstName} setFirstName={setFirstName} secondName={secondName} setSecondName={setSecondName} />
    </div>
  )
}

export default Login
