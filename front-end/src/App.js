import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Map from './components/Map';
import Events from './components/Events';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Navbar/>
      <Map/>
      <Chart1/>
    </>
  );
}

export default App;
