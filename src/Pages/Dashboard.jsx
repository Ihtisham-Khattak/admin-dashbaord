import React from "react";
import "../Styles/Dashboard.css";
import SingleCard from "../Component/ReusableComponent/SingleCard";

// Charts
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import milesStatisticData from "../assets/dummy-data/mileStatics";
import bookingCarStats from "../assets/dummy-data/carStatics";

//Car Recommendation
import RecommendCar from "../Component/UI/RecommendCar";
import recommendCarData from "../assets/dummy-data/recommendCars";

const Dashboard = () => {
  const itemObj = {
    title: "Total Cars",
    totalNumber: "750+",
    icon: "ri-police-car-line",
  };

  const tripObj = {
    title: "Total Trip",
    totalNumber: "850",
    icon: "ri-steering-2-fill",
  };

  const clientObj = {
    title: "Total Client",
    totalNumber: "85k",
    icon: "ri-folder-user-line",
  };

  const distanceObj = {
    title: "Distance Cover (km)",
    totalNumber: "8558",
    icon: "ri-timer-2-line",
  };

  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard items={itemObj} />
          <SingleCard items={tripObj} />
          <SingleCard items={clientObj} />
          <SingleCard items={distanceObj} />
        </div>

        <div className="statistic">
          <div className="stats">
            <h2 className="stats__title">Miles Stats</h2>
            <ResponsiveContainer width={400} height={300}>
              <BarChart data={milesStatisticData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <Bar dataKey="mileStats" stroke="#8884d8" fill="#8884d8" />
                <Tooltip wrapperClassName="tooltip__cursor" cursor={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="stats">
            <h3 className="stats__title">Cars Stats</h3>
            <ResponsiveContainer width={400} height={300}>
              <BarChart data={bookingCarStats}>
                <XAxis dataKey="name" stroke="#237893" />
                <Bar dataKey="prevWeek" fill="#8884d8" />
                <Bar dataKey="week" fill="#82ca9d" />
                <Tooltip wrapperClassName="tooltip__cursor" cursor={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarData.map((item) => (
            <RecommendCar items={item} key={item.id} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
