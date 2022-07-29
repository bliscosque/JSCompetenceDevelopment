import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import RouterComp from './routes';

function App() {
  return (
    <Router navigator={history} location={history.location}>
      <Header />
      <RouterComp />
      <GlobalStyles />
    </Router>
  );
}

export default App;
