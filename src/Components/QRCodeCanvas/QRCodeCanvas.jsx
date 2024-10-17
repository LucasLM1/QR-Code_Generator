// src/Components/QRCodeCanvas.jsx
import React, { useEffect, useRef } from "react";
import '../QRCodeCanvas/QRCodeCanvas.scss';
import QRCode from 'qrcode';

export default function QRCodeCanvas({ text }) {
    const canvasRef = useRef();

    useEffect(() => {
        if (text.trim() !== "") {
            QRCode.toCanvas(
                canvasRef.current,
                text,
                { width: 250 },
                (error) => {
                    if (error) {
                        console.log(error);
                    }
                }
            );
        } else {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [text]);

    const downloadQRCode = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL("image/png");

        const link = document.createElement('a');
        link.href = image;
        link.download = 'qrcode.png';
        link.click();
    };

    return (
        <section className="qr-code__component">
            <canvas ref={canvasRef} id="canvas" className="qr-code__canvas"></canvas>
            {text && (
                <button onClick={downloadQRCode} className="qr-code__donwload">
                    Baixar QR Code
                </button>
            )}
        </section>
    );
}
