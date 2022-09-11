import React from 'react'
import '../Styles/Setting.css'

const Setting = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Settings</h2>

        <div className="settings__top">
          <button className="setting__btn">Profile</button>
          <button className="setting__btn">Details</button>
          <button className="setting__btn">Email</button>
          <button className="setting__btn">Password</button>
          <button className="setting__btn">Notificaitons</button>
        </div>

        <div className="details__form">

          <h2 className="profile__title">My Profile</h2>
          <p className="profile__desc">Update Photo and Personal Info</p>
          <form>
            <div className="form__group">
              <div>
                <label>Live In</label>
                <input type='text' placeholder='Pakistan'/>
              </div>

              <div>
                <label>Street</label>
                <input type='text' placeholder='Peshawar'/>
              </div>
              </div>

            <div className='form__group'>
              <div>
                <label>Email</label>
                <input type='email' placeholder='email@gmail.com'/>
              </div>

              <div>
                <label>Password</label>
                <input type='password' placeholder='*****'/>
              </div>
            </div>

            <div className='form__group'>
              <div>
                <label>Date of Birth</label>
                <input type='date' placeholder='dd/mm/yyyy'/>
              </div>

              <div>
                <label>Gender</label>
                <input type='text' placeholder='Male/Female'/ >
              </div>
            </div>

            <div className='form__group'>
              <div>
                <label>Choose File</label>
                <input type='file' placeholder='Choose File'/>
              </div>

              <div className='btn'>
                <button type='submit'>Delete</button>
                <button type='submit'>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Setting