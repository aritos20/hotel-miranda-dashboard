import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const NavBar = () => {
  const auth = useAuth();

  return (
    <nav>
        <Link to="/">Home</Link>
        {!auth.user.isLogged && (
            <Link to="/login">Sign in</Link>
        )}
    </nav>
  )
}

export default NavBar