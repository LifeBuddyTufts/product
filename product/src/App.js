// import logo from './logo.svg';
import './App.css';
import Form from './components/post/Form.js';
import Home from './pages/Home.js';
import PostCard from './components/post/PostCard.js';

function App() {
  // const value = 1;
  return (
    <div className="App">
      <Home></Home>
      <Form></Form>
      <PostCard></PostCard>
    </div>
  );
}

export default App;
