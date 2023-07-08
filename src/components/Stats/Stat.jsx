import { useState } from "react"
import './stats.css'

const Stat = ({stat}) => {

  const [toggleTime, setToggleTime] = useState('weekly')

  const cleanTitle = stat.title.toLowerCase().split(' ').join('-')
  console.log(cleanTitle)

  return (
    <div className={'stat stat__' + cleanTitle} style={{backgroundColor: stat.backgroundColor}}>
      <div className="stat__background" style={{backgroundColor: stat.backgroundColor}}>
        <img src={'../images/icon-' + cleanTitle + '.svg'} alt="background" />
      </div>
      <div className="stat__description">
        <div className="stat__header">
          <div className="stat__title">{stat.title}</div>
          <div className="stat__options">
            <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
          </div>
        </div>
        <div className="stat__time">{toggleTime === 'daily' ? stat.timeframes.daily.current + 'hrs' : toggleTime === 'weekly' ? stat.timeframes.weekly.current + 'hrs' : stat.timeframes.monthly.current + 'hrs'}</div>
        <div className="stat__previous">{toggleTime == 'daily' ? 'Yesterday - ' + stat.timeframes.daily.previous + 'hrs' : toggleTime === 'weekly' ? 'Last week - ' + stat.timeframes.weekly.previous + 'hrs' : 'Last month - ' + stat.timeframes.monthly.previous + 'hrs'} </div>
      </div>
    </div>
  )
}

export default Stat