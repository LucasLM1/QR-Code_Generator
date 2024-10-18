import { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import MainContent from './Components/MainContent/MainContent.jsx';
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
