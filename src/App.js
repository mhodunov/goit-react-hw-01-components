import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js';
import userData from './Profile/user.json';
import Statistics from './Statistics/Statistics.js'
import statisticalData from './Statistics/statistical-data.json'

function App() {
  return (
    <div className="wrapper">
    <Profile
      avatar={userData.avatar}
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      followers={userData.stats.followers}
      views={userData.stats.views}
      likes={userData.stats.likes}
    />
    <Statistics
      title='Upload Data'
      stats={statisticalData}
      />
    </div>
  );
};

export default App;
