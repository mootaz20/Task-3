import './Navbar.css';
import { MdMenu } from "react-icons/md";
import Visit from './Visit/Visit';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  const navigate = useNavigate();

  const handleScroll = ()=>{
    if(window.innerWidth <= 1120){
      setSticky(false);
    }else{
      if(window.scrollY > 150){
        setSticky(true);
        } else {
        setSticky(false);
        }
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () =>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  const myFunction = () => {
    const resNav = document.querySelector('.resNavStyle');
    resNav.classList.toggle('open');
  }

  return (
    <div className='container'>
      <nav className={`nav ${sticky ? 'sticky' : ''} `}>
        <div className="logo">
          <h1 onClick={()=> navigate('/')}>VILLA</h1>
        </div>
        <div className="url">
          <ul className="menu">
            <li><NavLink className="menuItem" to="/">Home</NavLink></li>
            <li><NavLink className="menuItem" to="/properties">Properties</NavLink></li>
            <li><NavLink className="menuItem" to="/propertyDetails">Property Details</NavLink></li>
            <li><NavLink className="menuItem" to="/contact">Contact Us</NavLink></li>
            <li>
              <Visit />
            </li>
          </ul>
              <button className="icon" onClick={myFunction}>
                <MdMenu size={'30px'} />
              </button>
        </div>
      </nav>
      <div className="resNavStyle">
      <ul className="menu">
            <li><NavLink className="menuItem" to="/">Home</NavLink></li>
            <li><NavLink className="menuItem" to="/properties">Properties</NavLink></li>
            <li><NavLink className="menuItem" to="/propertyDetails">Property Details</NavLink></li>
            <li><NavLink className="menuItem" to="/contact">Contact Us</NavLink></li>
            <li>
              <Visit />
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar;
