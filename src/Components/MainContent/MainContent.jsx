import React from 'react';
import QRCodeCanvas from '../QRCodeCanvas/QRCodeCanvas';
import './MainContent.scss'

const MainContent = ({ text, setText }) => {
    return (
        <main className='main__component'>
            <label className="main__label" htmlFor="text">
                Digite algo ou insira algum link para que o QR-Code possa ser gerado...
            </label>

            <input
                className="main__input"
                type="text"
                onChange={(element) => setText(element.target.value)}
                value={text}
            />

            <QRCodeCanvas text={text} />
        </main>
    );
};

export default MainContent;
