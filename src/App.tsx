import React from 'react';
import MainContainer from './components/MainContainer/MainContainer'
import HomePage from './scenes/HomePage/HomePage'
import Articles from './scenes/Articles/Articles'
function App() {
  return (
    <MainContainer >
      <HomePage />
      <Articles />
    </MainContainer>
  );
}

export default App;
