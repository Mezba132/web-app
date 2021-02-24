import React from 'react';
import Text from '../components/Text/text';
import Header from "../components/ToolBar/header";
import Footer from '../components/ToolBar/footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Text />
      <Footer/>
    </div>
  )
}

export default App;
