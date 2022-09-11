import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import profileImage from '../../assets/images/profile-02.png'



const Navbar = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="Search Car" />
          <span> <i class="ri-file-search-line"></i> </span>
        </div>

        {/* Noticifation Profile Link */}

          <div className="top__nav-right">
            <span className="notification"> <i class="ri-notification-line"></i> 
            
            <span className='badge'></span>
            </span>
            <div className="profile">
              <Link to="/setting"> <img src={profileImage} alt='Profile Avatar' /></Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar