import React from 'react';
import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';

const StatisticsList = ({ statisticalData }) => {
  console.log(statisticalData);
  return (
    <section className="statistics">
      <Statistics />
    </section>
  );
};

export default StatisticsList;
