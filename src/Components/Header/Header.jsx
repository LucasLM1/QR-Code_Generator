import React from "react";
import { ReactComponent as QRCodeSVG } from '../../assets/svg/qr-code-icon.svg'
import './Header.scss';
import LogoLM from "../../assets/image/LM-icon.jpg";

const Header = () => {
    return (
        <>
            <header className="header__component">
                <div className="header__content">
                    <QRCodeSVG />
                    <h4 className="header__name-project">
                        Gerador de QR-Code 
                    </h4>
                    <img className="header__image" src= {LogoLM} alt="Logotipo LM" />
                </div>
            </header>
        </>
    );
};

export default Header;
