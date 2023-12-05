import './demo.css'
import './Navbar.css'
import './Button.css'
function Home(){
    return(
       <div>
         <div className="layout" style={{
            backgroundImage: `url(./business.jpg)`,
            height:"90vh",
            width:"100%",
            paddingTop:"10px",
            backgroundSize:"cover"
        }}>
        <h1>We help to grow your business</h1>
        <h3>We are awesome</h3>
        </div>
        <div className="box">
        <div className="first">
            <h3>We are a creative group of people who design influential brands and digital experiences</h3>
            <p>In today's dynamic business environment, it is crucial to adapt and innovate to stay ahead of the curve. Companies that embrace change and leverage technology to streamline processes and enhance </p>
        </div>
        <div className="second">
        <h3>A truly global service provider. we have the best solution for your business to grow</h3>
        <p>customer experiences are poised for success. By fostering a culture of creativity and collaboration, businesses can cultivate a competitive edge and achieve sustainable growth.</p>
        </div>
        <div className="third">
        <h3>A truly global service provider. we have the best solution for your business to grow</h3>
        <p>customer experiences are poised for success. By fostering a culture of creativity and collaboration, businesses can cultivate a competitive edge and achieve sustainable growth.</p>
        </div>
        <div className="fourth">
        <h3>A truly global service provider. we have the best solution for your business to grow</h3>
        <p>customer experiences are poised for success. By fostering a culture of creativity and collaboration, businesses can cultivate a competitive edge and achieve sustainable growth.</p>
        </div>
       </div>
       <div>
        <div className="banner" style={{
            backgroundImage: `url(./banner.jpg)`,
            height:"40vh",
            width:"100%",
            paddingTop:"10px",
            backgroundSize:"cover"
        }}>
        <div className='newsletter'>
        <div class="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            <input type="text" placeholder="Your email address" />
            <button class="normal">Sign Up</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Home;