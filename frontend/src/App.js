import React, {useState} from 'react'

import './styles/App.css';
import Connection from './components/connection/Connection';

import Modbus from './pages/Modbus';
import Layout from './components/layout/Layout';


function Home() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'C++', body: 'Description'},
    {id: 3, title: 'C#', body: 'Description'}
  ])


  return (
      <Layout>
        {/* <h1 style={{textAlign: 'center'}}> Список узлов </h1>
        {posts.map(post => 
            <Connection id={post.id} key={post.id}/>
        )} */}
      </Layout>
  );
}

export default Home;
