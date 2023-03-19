import React from 'react';
import people from '../../assets/people.png';
import blog01 from '../../assets/blog01.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">A CFS leva conectividade com segurança e qualidade para onde você desejar!</h1>
      <p>Tenha uma empresa consolidada como a sua fornecedora de instalação e manutenção de cabeamento em fibra ótica.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Seu email" />
        <button type="button">Entre em contato</button>
      </div>

      <div className="gpt3__header-content__people">
        {/* <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p> */}
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={blog01} />
    </div>
  </div>
);

export default Header;
