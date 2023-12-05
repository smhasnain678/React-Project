import './demo.css'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
       <div className="footer">
        <div className="back">
        <ul>
            <li><FaFacebook /></li>
            <li><FaTwitter /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
        </div>
        <div className="contact">
        <div>
            <h4>Contact</h4>
            <p><strong>Address:</strong>Mandemakersstraat 63,City Wieze</p>
            <p><strong>Phone:</strong>+32  0481 55 29 77</p>
            <p><strong>E-mail:</strong>axelle.celik@lejeune.net</p>
        </div>
        <div>
            <h4>About</h4>
            <p>About us</p>
            <p>Terma & conditions</p>
            <p>my account</p>
            <p>Privacy policy</p>
        </div>
        <div>
            <h4>Resources</h4>
            <p>Forum</p>
            <p>Support</p>
            <p>Help center</p>
            <p>Developers & API</p>
            <p>Partners</p>
        </div>
        <div>
            <h4>My Account</h4>
            <p>Sign in</p>
            <p>View chart</p>
            <p>my wallet</p>
            <p>Track my order</p>
            <p>Help</p>
        </div>
        </div>
       </div>
    )
}
export default Footer;