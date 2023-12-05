import { useState, useEffect } from 'react';
import './demo.css'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Button } from './Button';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <div>
     <nav className="navbar">
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          DVON <i className="fa-solid fa-chart-line" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-items'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            About
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
            Sign Up
            </Link>
          </li>
        </ul>
        {Button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
     </nav>
    </div>
    // <div className="container">
    //   <h4>D V O N</h4>
    //   <ul>
    //     <li><Link to='/' style={{color:"white",textDecoration:"none"}}>Home</Link></li>
    //     <li><Link to='/about' style={{color:"white",textDecoration:"none"}}>About</Link></li>
    //     <li><Link to='/contact' style={{color:"white",textDecoration:"none"}}>Contact</Link></li>
    //   </ul>
    //   <div className="mobile">
    //     <i id="bar" className="fa fa-outdent" />
    //   </div>
    // </div>
  )
}

export default Navbar;
