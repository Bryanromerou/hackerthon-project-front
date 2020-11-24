import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Map from './components/Map';
import Events from './components/Events';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Router>
        <Navbar/>
        {/* <Map/> */}
      </Router>
    </>
  );
}

export default App;
