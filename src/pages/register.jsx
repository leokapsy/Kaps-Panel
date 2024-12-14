import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register =() => {
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirm_password: ''
  })
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/code"); 
  };



  return (
   <section className="register">
    <div className="container">
      <h2>Sign Up</h2>
      <form  className="form reg-form">
        <p className="errormsg">error</p>
        <input type="" placeholder='Name' name='name' value={userData.name} onChange={changeInputHandler} autoFocus />
        <input type="" placeholder='Surname' name='surname' value={userData.surname} onChange={changeInputHandler} autoFocus />
        <input type="" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />
        <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
        <input type="password" placeholder='Confirm Password' name='confirm_password' value={userData.confirm_password} onChange={changeInputHandler} />
        <button type="submit" className='btn primary' onClick={handleRegister}>Register</button>
      </form>
      <small>Already have an account? <Link to="/login">Sign In</Link></small>
    </div>
   </section>
  )

}
export default Register
