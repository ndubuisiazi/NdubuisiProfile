import './style/App.css';
import WelcomeSection from './Components/WelcomeSection';
import ResumeBar from './Components/ResumeBar';
import Projects from './Components/Projects';
import React from 'react';

function Home() {
  return (
    <div className="App">
      <WelcomeSection />
      <ResumeBar />
      <Projects />
    </div>
  );
}

export default Home;
