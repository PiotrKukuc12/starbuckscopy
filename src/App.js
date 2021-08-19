import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/MainPage/Main';
import GlobalStyles from './GlobalStyles.styles';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
        <Main />
      <Footer />
    </div>
  );
};

export default App;
