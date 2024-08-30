import Accordions from './Accordions/Accordions'
import './FeaturedText.css'

const FeaturedText = () => {
  
  return (
    <div className='featuredText'>
      <h3><span>|</span> Featured</h3>
      <div className='header'>
        <h1>Best </h1>
        <h1>Appartment &</h1>
        <h1>Sea view </h1>
      </div>
      <Accordions />
    </div>
  )
}

export default FeaturedText
