import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
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
        </div>
      </Router>
    </>
  );
}

export default App;