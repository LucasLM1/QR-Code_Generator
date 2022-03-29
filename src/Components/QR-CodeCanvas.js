import React, { useEffect, useRef } from "react";
import '../App.css';
import QRCode from 'qrcode';

// Passando como parametro para a criação e atualizaçao do QR-Code os valores que estão sendo inseridos no input.
export default function QRCodeCanvas({text}){

    const canvasRef = useRef()

    //o useEffect sempre é atualizado quando algo atualiza dentro da API.
    useEffect(
        () => {
            //Gerando QR-Code para o Canvas.
            QRCode.toCanvas(
                canvasRef.current, 
                text,
                { width: 200 },
                (error) =>{
                console.log(error)
            })
        },[text] 
        //ao inserir o value de text, todo valor que for inserido passará pelo array, assim realizando a atualização do mesmo e a mostrando para o usuário que está utilizando a aplicação.
        //Em outras palavras, sempre que o texto mudar, o QR-Code muda.
    )

    return (
        <section  className="qrCode">
            {/* Mostrando o resultado do QR-Code na tela */}
            <canvas ref={canvasRef} id="canvas"></canvas>

            
        </section>
    )
}