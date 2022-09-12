import React from "react";
import trackData from '../../assets/dummy-data/trackingData'
import { BarChart, XAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';


const TrackingCharts = () => {
  return (
    // <ResponsiveContainer width={100} height={50}>
    //   <LineChart >
    //     <CartesianGrid strokeDasharray='0' stroke="#b7ffe913"/>
    //     <XAxis datakey='name' fill='#ddd'/>
    //     <YAxis datakey='mt' fill='#ddd'/>
    //     <Line type='monotone' datakey='km' data={trackData} stroke='#e1424e'/>
    //   </LineChart>
    // </ResponsiveContainer>

    <ResponsiveContainer width={400} height={300}>
    <BarChart data={trackData}>
      <XAxis dataKey="name" stroke="#237893" />
      <Bar dataKey="mt" fill="#8884d8" />
      <Bar dataKey="km" fill="#82ca9d" />
      <Tooltip wrapperClassName="tooltip__cursor" cursor={false} />
    </BarChart>
  </ResponsiveContainer>

  );
};

export default TrackingCharts;
