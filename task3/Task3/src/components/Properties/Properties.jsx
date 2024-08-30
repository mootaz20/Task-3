import './Properties.css'
import PropertiesCard from './PropertiesCard/PropertiesCard'

const Properties = () => {
  return (
    <div className='properties'>
      <div className="contanier">
        <div className="head">
            <p><span>|</span> Properties</p>
            <h2>We Provide The Best Property You Like</h2>
        </div>
        <div className='grid'>
            <PropertiesCard title={'Luxury Villa'} img={'/src/images/property-01.jpg'} price={'$2.264.000'} bedrooms={'8'} bathrooms={'8'} floor={'3'} area={'545m2'} location={'18 New Street Miami, OR 97219'} parking={'6 spots'} />
            <PropertiesCard title={'Luxury Villa'} img={'/src/images/property-02.jpg'} price={'$1.180.000'} bedrooms={'6'} bathrooms={'5'} floor={'3'} area={'450m2'} location={'54 Mid Street Florida, OR 27001'} parking={'8 spots'} />
            <PropertiesCard title={'Luxury Villa'} img={'/src/images/property-03.jpg'} price={'$1.460.000'} bedrooms={'5'} bathrooms={'4'} floor={'3'} area={'225m2'} location={'26 Old Street Miami, OR 38540'} parking={'10 spots'} />
            <PropertiesCard title={'Apartment'} img={'/src/images/property-04.jpg'} price={'$584.500'} bedrooms={'4'} bathrooms={'3'} floor={'25th'} area={'125m2'} location={'12 New Street Miami, OR 12650'} parking={'2 cars'} />
            <PropertiesCard title={'Penthouse'} img={'/src/images/property-05.jpg'} price={'$925.600'} bedrooms={'4'} bathrooms={'4'} floor={'38th'} area={'180m2'} location={'34 Beach Street Miami, OR 42680'} parking={'2 cars'} />
            <PropertiesCard title={'Modern Condo'} img={'/src/images/property-06.jpg'} price={'$450.000'} bedrooms={'3'} bathrooms={'2'} floor={'26th'} area={'165m2'} location={'22 New Street Portland, OR 16540'} parking={'3 cars'} />
        </div>
      </div>
    </div>
  )
}

export default Properties
