import React from "react";
import './Footer.scss';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg'
import { ReactComponent as LinkedIcon } from '../../assets/svg/linkedin.svg'
import { ReactComponent as PortfolioIcon } from '../../assets/svg/world.svg'

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

                    <div className="footer__contact">
                        <a className="footer__link--networks" href="https://www.linkedin.com/in/lucaslmsc/" target="_blank" rel="noreferrer">
                            <LinkedIcon />
                        </a>

                        <a className="footer__link--networks" href="https://lucaslm1.netlify.app/" target="_blank" rel="noreferrer">
                            <PortfolioIcon />
                        </a>

                        <a className="footer__link--networks" href="https://github.com/LucasLM1" target="_blank" rel="noreferrer">
                            <GithubIcon />
                        </a>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default footer;
