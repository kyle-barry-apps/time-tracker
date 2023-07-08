import React from 'react'
import './profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__description">
        <div className="profile__avatar">
          <img src="../images/image-jeremy.png" alt="profile" />
        </div>
        <div className="profile__report">Report for</div>
        <div className="profile__name">Jeremy Robson</div>
      </div>
      <div className="profile__dates">
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile