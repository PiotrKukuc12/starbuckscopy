import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/MainPage/Main';
import GlobalStyles from './GlobalStyles.styles';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Main />
    </div>
  );
};

export default App;
