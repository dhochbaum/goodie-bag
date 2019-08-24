import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = (props) => {
  return (
      <nav>
    <div id='navbar' className='row'>
        <div>Goodie Bag</div>
      <Link to="/">Home</Link>
      <Link to="/candies">Candies</Link>
    </div>
    </nav>
  )
}

export default Navbar
