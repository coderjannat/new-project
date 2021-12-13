import './App.css';
import HeroSection from './comonent/HeroSection/HeroSection';
import Landing from './comonent/Landing/Landing';
import Catagories from './comonent/Catagories/Catagories';
import Post from './comonent/Post/Post';
import Subscribe from './comonent/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <Landing></Landing>
      <Catagories></Catagories>
      <Post></Post>
      <Subscribe></Subscribe>
    </div>
  );
}

export default App;
