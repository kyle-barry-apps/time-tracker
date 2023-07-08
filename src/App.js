import Layout from './components/Layout/Layout';
import { TimeProvider } from './contexts/TimeContext';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [userData, setUserData] = useState([])

  const getJson = () => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .then(resp => resp.json())
    .then(json => setUserData(json))
    .catch(err => console.log(err))
  }

  useEffect(() => { 
    getJson()
  }, [])

  return (
    <TimeProvider>
      <Layout stats={userData} />
    </TimeProvider>
  );
}

export default App;
