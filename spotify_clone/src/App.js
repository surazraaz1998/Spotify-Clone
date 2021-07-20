import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login"
import { getTokenFromResponseUrl } from './spotify';
function App() {
  const [token, settoken] = useState(null);
  useEffect(() => {
    const hash =getTokenFromResponseUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      settoken(_token)
    }
    
  }, [])
  return (
    <div className="app">
      {
        token ? (<h1>I am logged in</h1>):(<Login/>)
      }
    </div>
  );
}

export default App;
