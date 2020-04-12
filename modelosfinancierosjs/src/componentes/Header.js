import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>
               <Link to={'/'}>
                    <img src="/img/logo_modelofinanicero.jpg" alt="logo imagen"className="img-fluid"
                    style={{width: "1350px"}}/>
               </Link>
          </div>
     )
}
 
export default Header;