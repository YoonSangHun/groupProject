import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Lambda = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://sa9un75pf2.execute-api.eu-north-1.amazonaws.com/test1')
      .then(response => {
        // Assuming the response data is an array of objects 
        // where each object represents a corporation
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="corp_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="corp_sales" fill="#8884d8" />
      <Bar dataKey="corp_ope" fill="#82ca9d" />
    </BarChart>
  );
};

export default Lambda;
