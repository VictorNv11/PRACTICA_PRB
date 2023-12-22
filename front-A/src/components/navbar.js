import React from 'react'
import {Link} from 'react-router-dom';

export default function navbar() {
  return (
<div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" style={{paddingLeft: 20}}>CrediFamilia CF</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
       <li className="nav-item">
          <Link to="/FormClientes" className="nav-link">
            Cliente
           </Link>
        </li>    
        <li className="nav-item">
          <Link to="/Admin" className="nav-link">
            Admin
           </Link>  
        </li>
      </ul>
    </div>
  </nav>
</div>
  )
}
