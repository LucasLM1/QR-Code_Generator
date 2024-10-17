import React from "react";
// import "../App.css";
import './Footer.scss';
import LinkedIn from "../../assets/Linkedin.png";
import GitHub from "../../assets/GitHub.png";

const footer = () => {
    return (
        <>
            <footer className="footer__component">
                {/* <svg class="wavy-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#000" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,154.7C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
                <div className="footer__content">
                    <p className="footer__development">
                        Desenvolvido por: 

                        <strong>
                            <a className="footer__link" href="Lucas M. Souza | Desenvolvedor Web">
                                Lucas M. Souza | Desenvolvedor Web
                            </a>
                            
                        </strong>
                    </p>

                    <div classclassName="footer__contact">
                        <a href="https://www.linkedin.com/in/lucaslmsc/" target="_blank" rel="noreferrer">
                            <img className="footer__logo--linkedin" src={LinkedIn} alt="LinkedIn" />
                        </a>

                        <a href="https://github.com/LucasLM1" target="_blank" rel="noreferrer">
                            <img className="footer__logo--github" src={GitHub} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default footer;
