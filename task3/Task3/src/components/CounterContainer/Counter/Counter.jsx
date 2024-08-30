import './Counter.css'

const Counter = ({number,title}) => {
    
  return (
    <div className='counter'>
       <div className="counterDiv">
        <h2>{number} </h2>
        <p>{title} </p>
       </div>
    </div>
  )
}

export default Counter
