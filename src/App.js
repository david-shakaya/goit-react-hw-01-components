import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile/Profile';

import user from './user.json';
import statisticalData from './statistical-data.json';
import StatisticsList from './components/StatisticsList/StatisticsList';
import '../src/base.css';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList
        statisticalData={statisticalData}
        title={'Upload stats'}
      />
    </>
  );
};

export default App;
