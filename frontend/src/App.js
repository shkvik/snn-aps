import React, {useState} from 'react'
import './App.css';
import './styles/App.css';
import NodeItem from './components/NodeItem';
import Body from './components/layout/body/Body';
import Menu from './components/layout/menu/Menu';
import Content from './components/layout/content/Content';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'C++', body: 'Description'},
    {id: 3, title: 'C#', body: 'Description'}
  ])



  return (
    <div className="App">
      
      <Body>
        <Content>
          <Menu>
            <h1 style={{textAlign: 'center'}}> Список узлов </h1>
            {posts.map(post => 
                <NodeItem post={post} key={post.id}/>
            )}
          </Menu>
          <Menu>
            <h1 style={{textAlign: 'center'}}> Список узлов </h1>
            {posts.map(post => 
                <NodeItem post={post} key={post.id}/>
            )}
          </Menu>
          <Menu>
            <h1 style={{textAlign: 'center'}}> Список узлов </h1>
            {posts.map(post => 
                <NodeItem post={post} key={post.id}/>
            )}
          </Menu>
        </Content>
      </Body>
    </div>
  );
}

export default App;
