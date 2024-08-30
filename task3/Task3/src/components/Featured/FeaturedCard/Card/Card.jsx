

const Card = ({img,title,desc}) => {
  return (
    <>
       <li>
            <img src={img} alt="error" />
            <h4>{title}<br /> <span>{desc}</span></h4>
        </li>
    </>
  )
}

export default Card
