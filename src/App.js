import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import MainContent from './Components/MainContent/MainContent.jsx';
// import QRCodeCanvas from './Components/QR-CodeCanvas';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Header/>
      <MainContent text={text} setText={setText} />
      <Footer/>
    </div>
  );
}

export default App;
