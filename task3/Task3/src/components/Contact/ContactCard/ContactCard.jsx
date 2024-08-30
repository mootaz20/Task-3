import './ContactCard.css'

const ContactCard = ({img,title,desc}) => {
  return (
      <div className='card'>
      <div className='img'>
        <img src={img} alt="error" />
      </div>
      <div className='text'>
        <h6>{title} </h6>
        <span>{desc} </span>  
      </div> 
      </div>
  )
}

export default ContactCard
