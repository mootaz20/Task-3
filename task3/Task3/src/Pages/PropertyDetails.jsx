import Banner from "../components/Banner/Banner"
import BestDeal from "../components/BestDeal/BestDeal"
import Details from "../components/Details/Details"

const PropertyDetails = () => {
  return (
    <div className="PropertyDetails">
      <Banner url={'Home / Single Property'} title={'Single Property'} />
      <Details />
      <BestDeal />
    </div>
  )
}

export default PropertyDetails
