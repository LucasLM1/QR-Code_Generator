import {useState} from 'react';
import './App.css';

import Header from './Components/Header';
import QRCodeCanvas from './Components/QR-CodeCanvas';
import Footer from './Components/Footer.jsx';

function App() {

  const [text, setText] = useState("")

  return (
    <div className="App">
      <Header></Header>
      <label className="insertText" for="text">Digite algo ou insira algum link para que o QR-Code possa ser gerado</label>
      <input className="contentQRCode" type="text" onChange={(element) => {setText(element.target.value)}} value={text}></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
      <Footer></Footer>
    </div>
  );
}

export default App;
