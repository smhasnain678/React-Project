import './demo.css'
import './Button.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact(){
    return(
        <div className='super'>
        <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Email:</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Password:</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </div>
    )
}
export default Contact;