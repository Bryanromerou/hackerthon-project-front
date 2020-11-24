import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </>
  );
}

export default App;
