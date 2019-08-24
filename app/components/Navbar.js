import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = (props) => {
  return (
    <nav>
        <div className='container'>
            <div id='navbar' className='row align-items-center'>
                <div className='col-4 col-md-2'>Goodie Bag</div>
                <div className='col-3 col-md-1'><Link to="/">Home</Link></div>
                <div className='col-3 col-md-1'><Link to="/candies">Candies</Link></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
