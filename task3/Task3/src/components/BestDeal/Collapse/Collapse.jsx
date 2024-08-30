import './Collapse.css'
import CollapseCard from './CollapseCard/CollapseCard';
import CollapsePhoto from './CollapsePhoto/CollapsePhoto';
import CollapseText from './CollapseText/CollapseText';
const Collapse = ({type}) => {
 
  return (
    <div className='collapse'>
     {type === "Appartment" ? 
      <>
      <CollapseCard total={'185 m2'} floor={'26th'} rooms={'4'} parking={'YES'} payment={'Bank'} />
      <CollapsePhoto img={'/src/images/deal-01.jpg'} />
      <CollapseText text={'Extra Info About Property'} />
      </> : type === "Villa House" ?  
      <>
      <CollapseCard total={'250 m2'} floor={'26th'} rooms={'5'} parking={'YES'} payment={'Bank'} />
      <CollapsePhoto img={'/src/images/deal-02.jpg'} />
      <CollapseText text={'Extra Info About Villa'} />
      </> : 
      <>
      <CollapseCard total={'320 m2'} floor={'34th'} rooms={'6'} parking={'YES'} payment={'Bank'} />
      <CollapsePhoto img={'/src/images/deal-03.jpg'} />
      <CollapseText text={'Extra Info About Penthouse'} />
      </>
      }
    </div>
  )
}

export default Collapse
