import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    
  return (
    <div>
      <main>
        <h2>AboutUs Page</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
          <Link to="/">Home </Link>
          <Link to="/emp">Employee</Link>

      </nav>
    </div>
  )
}

export default About
