import React from 'react';

const StatisticItem = ({ format, percent }) => (
  <>
    <span className="label">{format}</span>
    <span className="percentage">{percent} %</span>
  </>
);

export default StatisticItem;
