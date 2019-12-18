import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import MainContainer from './MainContainer';

const App = () => {
  return (
    <div className="app">
      <Navigation></Navigation>
      <MainContainer></MainContainer>
    </div>
  );
};

export default App;
