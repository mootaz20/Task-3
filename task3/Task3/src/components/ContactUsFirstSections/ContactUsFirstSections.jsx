import ContactCard from '../Contact/ContactCard/ContactCard'
import Form from '../Contact/Form/Form'
import Map from '../Contact/Map/Map'
import './ContactUsFirstSections.css'

const ContactUsFirstSections = () => {
  return (
    <div className='ContactUsFirstSections'>
      <div className="container">
       <div className="contactInfo">
       <div className='contactUsText'>
            <p><span>|  </span> Contact Us </p>
            <h1>Get In Touch With Our Agents</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, voluptates quibusdam eos ex inventore cupiditate minima ab nesciunt voluptate rerum fugit similique ut odio quidem doloribus placeat eligendi sed suscipit.</p>
        <div className='cards'>
          <div className='conatctUsCard'>
            <ContactCard img={'/src/images/phone-icon.png'} title={'010-020-0340'} desc={'Phone Number'} />
          </div>
          <div className='conatctUsCard'>
            <ContactCard img={'/src/images/email-icon.png'} title={'info@villa.com'} desc={'Business Email'} />  
          </div>      
        </div>
        </div>
        <div className='contactUsForm'>
            <Form />
        </div>
       </div>
       <div className="map">
        <Map />
       </div>
      </div>
    </div>
  )
}

export default ContactUsFirstSections
