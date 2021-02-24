import React from 'react';
import Header from "../../components/ToolBar/header";
import Footer from '../../components/ToolBar/footer';
import ReactPlayer from 'react-player'

const App = () => {
  return (
    <div className="App">
      <Header/>
        <div className="video-player player-wrapper">
          <ReactPlayer 
            controls
            url='videos/POIRIER_vs_MCGREGOR.mp4' 
          />
        </div>
      <Footer/>
    </div>
  )
}

export default App;
