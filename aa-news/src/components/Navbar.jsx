import React from 'react'
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='nav-bar'> 
        <Link className="link" to={'/'} >Home</Link>
        <Link to={'/coding'} className="link">Coding</Link>
        <Link to={'/cooking'} className="link">Cooking</Link>
        <Link to={'/football'} className="link">Football</Link>
    </div>
  )
}
