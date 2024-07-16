import { useState } from 'react';
import './App.css';
import Background from './Components/Background/background';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';

function App() {

  let heroData = [
    {text1:"Dive into", text2:"What you love"},
    {text1:"Indulge", text2:"Your passions"},
    {text1:"Give in to", text2:"Your passion"}
  ]
  const [heroCount, setHeroCount] = useState(0);

  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div className="App">
      <Background 
      playStatus={playStatus} 
      heroCount={heroCount}
      />
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  );
}

export default App;
