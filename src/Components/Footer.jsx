import React from "react";
import "../App.css";
import LinkedIn from "../assets/Linkedin.png";
import GitHub from "../assets/GitHub.png";

const footer = () => {
    return (
        <>
            <section className="footerComponent">
                <svg class="wavy-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#009dac" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,154.7C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <div className="contentFooter">
                    <p className="constructedBy">Construido por Lucas Souza</p>

                    <div classclassName="contato">
                        <a href="https://www.linkedin.com/in/lucaslmsc/" target="_blank" rel="noreferrer">
                            <img className="imgRedes" src={GitHub} alt="LinkedIn" />
                        </a>

                        <a href="https://github.com/LucasLM1" target="_blank" rel="noreferrer">
                            <img className="imgRedes" src={LinkedIn} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default footer;
