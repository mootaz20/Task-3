import Card from './Card/Card'
import './FeaturedCard.css'

const FeaturedCard = () => {
  return (
      <div className='shadow'>
        <ul>
            <Card img={'/src/images/info-icon-01.png'} title={'250 m2 '} desc={'Total Flat Space'} />
            <Card img={'/src/images/info-icon-02.png'} title={'Contract '} desc={'Contract Ready'} />
            <Card img={'/src/images/info-icon-03.png'} title={'Payment '} desc={'Payment Process'} />
            <Card img={'/src/images/info-icon-04.png'} title={'Safety '} desc={'24/7 Under Control'} />
        </ul>
      </div>
  )
}

export default FeaturedCard
