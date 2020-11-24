import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
