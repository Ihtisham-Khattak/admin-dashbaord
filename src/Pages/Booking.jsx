import React from "react";
import '../Styles/Booking.css'
import CarStats from "../Component/UI/CarStats";
import bookingCars from "../assets/dummy-data/booking-cars.js";


const Booking = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Car Booking </h2>

        {/* Filters */}
        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcomming">Upcomming</option>
            </select>
          </div>

          <div className="filter__widget-02">
            <select>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
            </select>
          </div>
        </div>

        <div className="booking__car-list">

          {/* Mapping the data from  */}
            {
              bookingCars.map( (item) => (

                <CarStats item={item} key={item.id}/>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default Booking;
