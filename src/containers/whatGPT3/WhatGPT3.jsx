/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import oi from '../../assets/oi.JPG';
import ccr from '../../assets/CCR.JPG';
import tim from '../../assets/tim.JPG';
import concer from '../../assets/concer.JPG';
import eletronet from '../../assets/eletronet.JPG';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Presença" text="A instalação de cabos de fibra ótica é uma tarefa que requer habilidades técnicas especializadas e equipamentos de ponta. Para a CFS, ter grandes clientes é uma prova importante de qualidade, pois eles geralmente têm requisitos rigorosos para a instalação de infraestrutura de rede confiável e de alta qualidade." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Parcerias:</h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      
      <img src={oi} />
      <Feature title="Oi" text="" />
      <img src={tim} />
      <Feature title="Tim" text="" />
      <img src={concer} />
      <Feature title="Concer" text="" />
      <img src={eletronet} />
      <Feature title="Eletronet" text="" />
      <img src={ccr} />
      <Feature title="CCR" text="" />
     
    </div>
  </div>
);

export default WhatGPT3;