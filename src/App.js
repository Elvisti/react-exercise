import React from 'react';
import './App.css';
import './reset.css'
import Routes from './routes';
import { BrowserRouter as Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route>
        <Routes />
      </Route>
    </div>
  );
}

export default App;
