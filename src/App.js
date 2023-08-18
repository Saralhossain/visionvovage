import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { store } from "../src/Store/index";
import Navbar from './Screens/Navbar/Navbar'; // Import your Navbar component
import Dashboard from './Screens/Dashboard/Dashboard';
import Details from './Screens/Details/Details'; // Import your Details component

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Dashboard/>} />
            <Route path="/Details" element={<Details/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;