import TimeContext from '../../contexts/TimeContext'
import { useContext } from 'react'
import './profile.css'


const Profile = () => {

  const { time, setTime } = useContext(TimeContext)

  return (
    <div className="profile">
      <div className="profile__description">
        <div className="profile__avatar">
          <img src="../images/image-jeremy.png" alt="profile" />
        </div>
        <div className="profile__data">
          <div className="profile__report">Report for</div>
          <div className="profile__name">Jeremy Robson</div>
        </div>
      </div>
      <div className="profile__dates">
        <ul>
          <li className={time === 'daily' ? 'active' : ''} onClick={() => setTime('daily')}>Daily</li>
          <li className={time === 'weekly' ? 'active' : ''} onClick={() => setTime('weekly')}>Weekly</li>
          <li className={time === 'monthly' ? 'active' : ''} onClick={() => setTime('monthly')}>Monthly</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile