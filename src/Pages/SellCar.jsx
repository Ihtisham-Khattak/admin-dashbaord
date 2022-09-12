import React from 'react'
import '../Styles/SellCars.css'
import carModel from '../assets/images/sell-car.png'
import TrackingCharts from '../Component/UI/TrackingCharts'
const SellCar = () => {
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2022 Model</h2>
            <img src={carModel} alt='carModel'/>
          </div>

          <div className="tracking__history">
            <h2>Tracking</h2>
              <TrackingCharts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellCar