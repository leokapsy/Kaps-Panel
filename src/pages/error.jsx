import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error_page'>
      <div className='center'>
        <Link to="/" className='btn primary'>Go Back Home</Link>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>

    </section>
  )
}

export default Error