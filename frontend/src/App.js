import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data, setData] = useState();

  useEffect(()=>{
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(
        (result)=> {
          setData(result);
        },
        (error) => {

        }
      )
  },[]);

  return (
    <div className="App">
        {data.test}
    </div>
  );
}

export default App;
