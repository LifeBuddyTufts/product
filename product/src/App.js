// import logo from './logo.svg';
import './App.css';
import Form from './components/post/Form.js';
import Home from './pages/Home.js';
import PostCard from './components/post/PostCard.js';
import Nav from './components/Nav.js';
// import Home from './pages/Home.js';
// import Buddies from './pages/Buddies.js';



function App() {
  // const value = 1;
  return (
    <div className="App">
      <Home></Home>
      <Form></Form>
      <PostCard></PostCard>
        <Nav></Nav>
      
    </div>
  );
}

export default App;
