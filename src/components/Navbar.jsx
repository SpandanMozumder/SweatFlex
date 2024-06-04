import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/discover'>Discover</Link>
            <Link to='/search'>Search</Link>
            <Link to='/bodypart'>Body Part</Link>
            <Link to='/equipment'>Equipment</Link>
            <Link to='/target'>Target</Link>
        </div>
    </nav>
  )
}

export default Navbar