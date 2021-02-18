import React from 'react';
import StatisticItem from '../StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const StatisticsList = ({ statisticalData, title }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {statisticalData.map(({ id, label, percentage }) => {
          return (
            <li key={id} className="item">
              {<StatisticItem format={label} percent={percentage} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// Так  можно прописать тип для итерируемого масива обьектов
StatisticsList.propTypes = {
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string,
};

export default StatisticsList;
