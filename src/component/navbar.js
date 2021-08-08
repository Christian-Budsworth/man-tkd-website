import * as React from 'react'
import { Link } from 'gatsby'

const navbar = ({children}) => {
    return (<div>
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      {children}
    </div>
    )
}

export default navbar