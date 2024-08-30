import './Form.css'

const Form = () => {
  return (
    <form className="contact-form">
              <div className="input">
                  <label htmlFor="name">Full Name</label>
                  <input type="name" name="name" id="name" placeholder="Your Name..." />
              </div>
              <div className="input">
                  <label htmlFor="email">Email Address</label>
                  <input type="text" name="email" id="email"  placeholder="Your E-mail..." />
              </div>
              <div className="input">
                  <label htmlFor="subject">Subject</label>
                  <input type="subject" name="subject" id="subject" placeholder="Subject..." />
              </div>
              <div className="input">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Your Message"></textarea>
              </div>
                  <button type="submit" className="button">Send Message</button>
    </form>
  )
}

export default Form
