import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LogIn =() => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }



  return (
   <section className="register">
    <div className="container">
      <h2>Sign In</h2>
      <form  className="form login_form">
        <p className="errormsg">error</p>
        <input type="" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />
        <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
        <button type="submit" className='btn primary'>Register</button>
      </form>
      <small>Don't have an account? <Link to="/register">Sign Up</Link></small>
    </div>
   </section>
  )

}
export default LogIn