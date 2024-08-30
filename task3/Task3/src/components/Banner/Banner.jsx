import './Banner.css'

const Banner = ({url,title}) => {
  return (
    <div className="banner">
      <div className="background">
        <div className='content'>
            <p>{url}</p>
            <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
