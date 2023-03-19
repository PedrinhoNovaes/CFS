import React from 'react';

import './footer.css';
import cfs from '../../assets/cfs.jpg'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Entre em contato e conheça nossas soluções.</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Tire suas dúvidas</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={cfs} alt="gpt3_logo" />
        <p>Rio de Janeiro, Brasil<br /> Todos os direitos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contatos</h4>
        <p>WhatsApp: +55 21 97370-3757</p>
        <p>Email: cfstelecom11@gmail.com</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compania</h4>
        <p>Termos & Condições </p>
        <p>Política de privacidade</p>
        <p>LGPD</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Endereço</h4>
        <p>XPTO XYZ</p>
        <p>CEP:</p>
        <p>Rio de Janeiro, RJ</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 BXDev. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;
