import './demo.css'
function About(){
    return(
       <div id="about-head">
       <div className="layout" style={{
            backgroundImage: `url(./about.jpg)`,
            height:"200px",
            width:"500px",
            paddingTop:"10px",
            backgroundSize:"cover"
        }}>
        </div>
        <div className='about-content'>
            <h1>Who We Are?</h1>
            <p>Welcome to [Your Company Name], where we believe that 
             shopping should be an experience, not just a transaction.
             Our journey began with a simple idea: to provide a curated 
             selection of high-quality products that enhance your lifestyle.
             Feel free to customize and expand upon this description to
             reflect the unique story, values, and offerings of your e-commerce 
             website.An "About Us" page is a crucial component of a website that
              provides information about the organization, company, or individuals
               behind the website. It serves as a way to introduce and establish 
               trust with visitors. Here's a template you can use as a starting
                point for your "About Us" page:</p>
        </div >        
       </div>
    )
}
export default About;