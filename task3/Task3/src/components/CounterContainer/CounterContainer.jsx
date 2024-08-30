import './CounterContainer.css'
import Counter from './Counter/Counter'
const CounterContainer = () => {
  const counters = [
    { number: '34', title: 'Buildings Finished Now' },
    { number: '12', title: 'Years Experience' },
    { number: '24', title: 'Awwards Won 2023' } 
];
  return (
    <div className='counterContainer'>
        <div className='container'>
        {counters.map((counter, index) => (
                <Counter key={index} number={counter.number} title={counter.title} />
            ))}
        </div>
    </div>
  )
}

export default CounterContainer
