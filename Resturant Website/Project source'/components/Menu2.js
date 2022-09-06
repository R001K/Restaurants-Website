import React from 'react'
import {Link} from 'react-router-dom'
import'./style/Menu.css'

export default function Menu() {
  return (
    
    <div className='nav'>
    <ul>
    <li>
<Link to ='/'>Home</Link>
    </li>
    <li>
<Link to ='/about'>About</Link>
    </li>
    <li>
<Link to ='/contact'>Contact</Link>
    </li>
    <li>
<Link to ='/Fetch'>showData</Link>
    </li>
    <li>
<Link to ='/Login'>Login</Link>
    </li>
</ul>

    </div>
  )
}
