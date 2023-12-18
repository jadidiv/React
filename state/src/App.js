import { useLoaderData } from 'react-router-dom';
import { getPosts } from './service';

import './App.css';
import Posts from './posts';
import Sidebar from './sidebar';

export async function loader() {
  const { data: posts } = await getPosts();
  return { posts };
}

function App() {

  const { posts } = useLoaderData();

  return (
    <div className="App">
      <div className='header'>
        <div className="branding">
          <h1 className="logo">&#9960;</h1>
          <h2 className="brand">Your Brand Text</h2>
        </div>
        <div className="menu">
          <ul>
            <li><a href='https://react.dev/learn/state-a-components-memory' target='_blank' rel="noreferrer">State: A Component's Memory</a></li>
          </ul>
        </div>
      </div>
      <div className='main'>
        <div className='container'>
          <Posts content={posts.slice(0,5)} />
        </div>
        <div className='sidebar'>
          <Sidebar content={posts.slice(0,4)} />
        </div>
      </div>
    </div >
  );
}

export default App;
