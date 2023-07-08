import Layout from './components/Layout/Layout';
import StatList from './components/Stats/StatList';
import Profile from './components/Profile/Profile';
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
    <>
    <Layout stats={userData} />
    </>
  );
}

export default App;
