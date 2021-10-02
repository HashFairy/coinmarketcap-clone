import React from 'react';
import Coinrank from './Compnonents/Coinrank';
import Navigation from './Compnonents/Navigation';
import './Styles/Navigation.css';




function App() {

  return (
    <div >
      {/* Header */}
       <Navigation/>
        <Coinrank/>
       {/* Cryptocurrency Leaderboard Ranking  */}
     
       
    </div>
  );
}

export default App;
