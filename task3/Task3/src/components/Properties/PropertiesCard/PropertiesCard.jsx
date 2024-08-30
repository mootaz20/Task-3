import './PropertiesCard.css'

const PropertiesCard = ({title,img,price,location,bedrooms,bathrooms,area,floor,parking}) => {
  return (
    <div className='propertiesCard'>
      <div className='propertiesItem'>
        <img src={img} alt="error" width={'296'} height={'219px'} />
        <div className='price'>
            <p>{title}</p>
            <h6>{price}</h6>
        </div> 
        <a href="">{location}</a>
        <div className='features'>
            <ul>
                <li>Bedrooms: <span>{bedrooms}</span></li>
                <li>Bathrooms: <span>{bathrooms}</span></li>
                <li>Area: <span>{area}</span></li>
                <li>Floor: <span>{floor}</span></li>
                <li>Parking: <span>{parking}</span></li>
            </ul>
        </div>
        <button>Schedule a visit</button>
      </div>
    </div>
  )
}

export default PropertiesCard
