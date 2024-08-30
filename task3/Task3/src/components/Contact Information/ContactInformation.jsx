import { IoMdMail } from "react-icons/io";
import { FaMap } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './ContactInformation.css'
const ContactInformation = () => {
  return (
    <>
       <div className="border-Bottom">
       <div className="container">
       <div className="contactInfo">
            <div className="location">
                <div className="flex line">
                <IoMdMail color="orangered" size={'23px'} />
                <p>Info@compnay.com</p>
                </div>
                <div className="flex">
                <FaMap color="orangered" size={'23px'} />
                <p>Sunny Isles Beach , FL 33160</p>
                </div>
            </div>
            <div className="icons">
               <ul>
                <li>
                   <a href="">
                   <SiInstagram />
                   </a>
                </li>
                <li>
                   <a href="">
                   <FaFacebook />
                   </a>
                </li>
                <li>
                    <a href="">
                    <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="">
                    <FaLinkedin />
                    </a>
                </li>
               </ul>
            </div>
        </div>
       </div>
       </div>
    </>
  )
}

export default ContactInformation
