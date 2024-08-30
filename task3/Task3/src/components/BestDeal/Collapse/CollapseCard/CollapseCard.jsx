import './CollapseCard.css'

const CollapseCard = ({total,floor,rooms,parking,payment}) => {
  return (
    <div className='collapseCard'>
      <div className='shadow'>
        <ul>
            <li>
                <p>Total Flat Space <strong>{total}</strong></p>
            </li>
            <li>
                <p>Floor number <strong>{floor}</strong></p>
            </li>
            <li>
                <p>Number of rooms <strong>{rooms}</strong></p>
            </li>
            <li>
                <p>Parking Available <strong>{parking}</strong></p>
            </li>
            <li>
                <p>Payment Process <strong>{payment}</strong></p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default CollapseCard
