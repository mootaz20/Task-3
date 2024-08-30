import Visit from '../../../Navbar/Visit/Visit'
import './CollapeText.css'

const CollapseText = ({text}) => {
  return (
    <div className='collapseText'>
      <h4>{text}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br />  <br /> When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
      <div className="visitButton">
      <Visit />
      </div>
    </div>
  )
}

export default CollapseText
