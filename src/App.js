import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js';
import userData from './Profile/user.json';

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
    </div>
  );
}

export default App;
