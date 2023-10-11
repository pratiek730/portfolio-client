import { NavLink, Outlet } from 'react-router-dom';
import './navbar.styles.css'
import { DropDownIcon } from '../../assets/icons/skills.icons';

function Navbar() {
    return ( <>
    
        <div className="navbar-container">

            <div className='navbar-logo-wrapper'>
                <NavLink to="/" className='navbar-logo'>
                    P. Parashar
                </NavLink>
            </div>
            <div className='navbar-elements-container'>
                <NavLink exact to="/" className="navbar-elements" >
                    Home
                </NavLink>
                <NavLink to="/aboutme" className="navbar-elements"  >
                    About Me
                </NavLink>


                <div className="dropdown">
                    <NavLink className="navbar-elements">Projects <img alt='dropdown' src={DropDownIcon} className='drop-icon' /></NavLink>
                    <div className="dropdown-content">
                        {/* <NavLink className="navbar-elements" to='http://projectapi.pratiekparashar.com/'>ApiConnect</NavLink> */}
                        <NavLink className="navbar-elements" to='http://crnecommerce.pratiekparashar.com/'>Ecommerce Clone</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        </>
     );
}

export default Navbar;