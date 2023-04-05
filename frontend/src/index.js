import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import Modbus from './pages/Modbus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/modbus/:id",
    element: <Modbus/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

try{
  const ws = new WebSocket('ws://192.168.0.131:8080');

  ws.onopen = () => {
    console.log('WebSocket connection opened');
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };

  ws.onmessage = (event) => {
    console.log(`Received message: ${event.data}`);
  };

  ws.send('Hello, WebSocket Server!');
}
catch(error){
  console.log(error);
}


reportWebVitals();
