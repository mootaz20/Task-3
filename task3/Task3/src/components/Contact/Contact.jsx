import './Contact.css'
import ContactCard from './ContactCard/ContactCard'
import Form from './Form/Form'
import Map from './Map/Map'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="background">
      </div>
      <div className="contact-info">
        <div className="container">
        <div className="heading">
            <p><span>|</span> Contact Us</p>
            <h1>Get In Touch With Our Agents</h1>
        </div>
        <div className="info">
            <div className="map">
                    <Map />
                <div className='contactCards'>
                  <div className='contactCard'>
                  <ContactCard img={'/src/images/phone-icon.png'} title={'010-020-0340'} desc={'Phone Number'} />
                  </div>
                 <div className='contactCard'>
                 <ContactCard img={'/src/images/email-icon.png'} title={'info@villa.com'} desc={'Business Email'} />
                 </div>
                 </div>
            </div>
            <div className="form">
              <Form />
            </div>
        </div>
        </div>
      </div>  
    </div>
  )
}

export default Contact
