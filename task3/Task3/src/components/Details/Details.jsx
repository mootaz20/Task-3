import FeaturedCard from '../Featured/FeaturedCard/FeaturedCard'
import Accordions from '../Featured/FeaturedText/Accordions/Accordions'
import './Details.css'

const Details = () => {
  return (
    <div className='details'>
        <div className="container">
            <div className='photoAndDesc'>
                <img src="/src/images/single-property.jpg" alt="error" />
                <span>Apparment</span>
                <h2>24 New Street Miami, OR 24560</h2>
                <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably havent heard of them ugh hella.
                <br /> <br /> <br /> When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up. </p>
            <div>
                <Accordions />
            </div>
        </div>
        <div className='cards'>
            <FeaturedCard />
        </div>
        </div>
    </div>
  )
}

export default Details
