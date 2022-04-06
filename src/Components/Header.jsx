import React from "react";
import { ReactComponent as QRCodeSVG } from '../assets/qr-code-icon.svg'
import "../App.css";

const Header = () => {
    return (
        <>
            <section className="headerComponent">
                <div className="headerContent">
                <h4 className="nameProject">Gerador de QR-Code</h4>
                <QRCodeSVG />
                </div>
            </section>
        </>
    );
};

export default Header;
