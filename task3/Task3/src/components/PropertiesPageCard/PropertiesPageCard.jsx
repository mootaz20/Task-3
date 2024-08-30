import { useEffect, useState } from 'react';
import PropertiesCard from '../Properties/PropertiesCard/PropertiesCard'
import './PropertiesPageCard.css'
import { AiOutlineDoubleRight } from "react-icons/ai";

const properties = [
  { 
    title : 'Luxury Villa',
    img: '/src/images/property-01.jpg',
    price: '$2,264,000',
    bedrooms: '8',
    bathrooms: '8',
    floor: '3',
    area: '545m2',
    location: '18 New Street Miami, OR 97219',
    parking: '6 spots',
  },
  { 
    title : 'Luxury Villa',
    img: '/src/images/property-02.jpg',
    price: '$1,180,000',
    bedrooms: '6',
    bathrooms: '5',
    floor: '3',
    area: '450m2',
    location: '54 Mid Street Florida, OR 27001',
    parking: '8 spots',
  },
  { 
    title : 'Luxury Villa',
    img: '/src/images/property-03.jpg',
    price: '$1,460,000',
    bedrooms: '5',
    bathrooms: '4',
    floor: '3',
    area: '225m2',
    location: '26 Old Street Miami, OR 38540',
    parking: '10 spots',
  },
  { 
    title : 'Apartment',
    img: '/src/images/property-04.jpg',
    price: '$584,500',
    bedrooms: '4',
    bathrooms: '3',
    floor: '25th',
    area: '125m2',
    location: '12 New Street Miami, OR 12650',
    parking: '2 cars',
  },
  { 
    title : 'Penthouse',
    img: '/src/images/property-05.jpg',
    price: '$925,600',
    bedrooms: '4',
    bathrooms: '4',
    floor: '38th',
    area: '180m2',
    location: '34 Beach Street Miami, OR 42680',
    parking: '2 cars',
  },
  { 
    title : 'Modern Condo',
    img: '/src/images/property-06.jpg',
    price: '$450,000',
    bedrooms: '3',
    bathrooms: '2',
    floor: '26th',
    area: '165m2',
    location: '22 New Street Portland, OR 16540',
    parking: '3 cars',
  },
  { 
    title : 'Luxury Villa',
    img: '/src/images/property-03.jpg',
    price: '$980.000',
    bedrooms: '8',
    bathrooms: '8',
    floor: '3',
    area: '550m2',
    location: '14 Mid Street Miami, OR 36450',
    parking: '12 spots',
  }, 
  { 
    title : 'Luxury Villa',
    img: '/src/images/property-02.jpg',
    price: '$1.520.000',
    bedrooms: '12',
    bathrooms: '15',
    floor: '3',
    area: '380m2',
    location: '26 Old Street Miami, OR 12870',
    parking: '14 spots',
  },
  { 
    title : 'Luxury Villa',
    img: '/src/images/property-01.jpg',
    price: '$3.145.000',
    bedrooms: '10',
    bathrooms: '12',
    floor: '3',
    area: '860m2',
    location: '34 New Street Miami, OR 24650',
    parking: '10 spots',
  },
 
 
];


const PropertiesPageCard = () => {
  const [data,setData] = useState([]);
  const [active,setActive] = useState('all');
  const handleFilterClick = (value) =>{
    let filterData = [];
    setActive(value);
     if(value === 'all'){
      filterData = properties;
      setData(filterData);
     }else{
      filterData = properties.filter((data)=>{
        return data.title.includes(value);
      });
      setData(filterData);
     }
  }
  useEffect(()=>{
    setData(properties);
  },[])

  return (
    <div className='PropertiesPageCard'>
    <div className='container'>
      <div className='Properties-filter'>
          <button className={active === 'all' ? 'active' : ''} onClick={()=>handleFilterClick('all')}>Show All</button>
          <button className={active === 'Apartment' ? 'active' : ''} onClick={()=>handleFilterClick('Apartment')}>Apartment</button>
          <button className={active === 'Villa' ? 'active' : ''} onClick={()=>handleFilterClick('Villa')}>Villa House</button>
          <button className={active === 'Penthouse' ? 'active' : ''} onClick={()=>handleFilterClick('Penthouse')}>Penthouse</button>
      </div>
      <div className='cards'>
          {data.map((property, index) => (
            <PropertiesCard
              key={index}
              title={property.title}
              img={property.img}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              floor={property.floor}
              area={property.area}
              location={property.location}
              parking={property.parking}
            />
          ))}
      </div>
      <div className='pagination'>
        <a href="">1</a>
        <a className='active' href="">2</a>
        <a href="">3</a>
        <a href=""><AiOutlineDoubleRight /></a>
      </div>
    </div>
  </div>
  )
}

export default PropertiesPageCard
