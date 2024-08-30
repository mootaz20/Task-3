import { useEffect, useRef, useState } from 'react';
import './BestDeal.css'
import Collapse from './Collapse/Collapse'

const BestDeal = () => {
    const [content, setContent] = useState("Appartment");
    const [active, setActive] = useState("appartment")  
    const div = useRef('');
    const onAppartmentClick = () =>{
      setContent("Appartment");
      setActive("appartment")
    }
    const onVillaHouseClick = () =>{
      setContent("Villa House");
      setActive("villa")
    }
    const onPenthoseClick = () =>{
      setContent("Penthouse");
      setActive("penthouse")
    }
  
    useEffect(()=>{
      const element = div.current;
      if (element) {
        element.classList.remove('animation');
        void element.offsetWidth;
        element.classList.add('animation');
      }
    }, [content]);
  return (
    <div className='bestDeal'>
      <div className="container">
        <div className='text'>
            <div className='textContent'>
                <p><span>|</span> Best Deal</p>
                <h6>Find Your Best Deal Right Now!</h6>
            </div>
            <div className='buttons'>
                <button onClick={onAppartmentClick} className={active === "appartment" ? "active" : ""}>Appartment</button>
                <button onClick={onVillaHouseClick} className={active === "villa" ? "active" : ""}>Villa House</button>
                <button onClick={onPenthoseClick} className={active === "penthouse" ? "active" : ""}>Penthouse</button>
            </div>
        </div>
        <div ref={div}>
            <Collapse type={content} />
        </div>
      </div>
    </div>
  )
}

export default BestDeal
