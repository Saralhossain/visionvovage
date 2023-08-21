import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Screens/Navbar/Navbar'; // Import your Navbar component
import Dashboard from './Screens/Dashboard/Dashboard';
import Details from './Screens/Details/Details'; // Import your Details component

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Dashboard/>
          <Details/>
          {/* <Routes>
            <Route path='/'>
                <Dashboard/>
            </Route>
            <Route path='/Details'>
                <Details/>
            </Route>
          </Routes> */}
          {/* <Routes>
            <Route path="/" exact element={<Dashboard/>} />
            <Route path="/Details" element={<Details/>} />
          </Routes> */}
        </div>
      </Router>
    </>
  );
}

export default App;