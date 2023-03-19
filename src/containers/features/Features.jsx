import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Missão:',
    text: 'Fornecer soluções de comunicação avançadas e confiáveis para nossos clientes, oferecendo serviços de instalação de cabos de fibra ótica de alta qualidade, utilizando tecnologia de ponta, equipes altamente qualificadas e compromisso com a satisfação do cliente.',
  },
  {
    title: 'Visão:',
    text: 'Ser líder em soluções de comunicação, tornando-se referência no mercado de instalação de cabos de fibra ótica pela excelência em nossos serviços e pela satisfação dos nossos clientes.',
  },
  {
    title: 'Valores:',
    text: "Excelência: buscar a excelência em todos os nossos serviços e processos, com o objetivo de fornecer aos nossos clientes soluções de comunicação de alta qualidade.Compromisso: comprometer-se com a satisfação do cliente, cumprindo prazos, oferecendo soluções personalizadas e garantindo a qualidade do nosso trabalho. Responsabilidade: assumir a responsabilidade por nossas ações e pelos impactos que elas geram na sociedade e no meio ambiente, buscando sempre a sustentabilidade e a preservação do meio ambiente. ",
  },
  
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text" >Quem é a CFS?</h1>
      <p> Somos uma empresa de telecomunicações, especializada na instalação e manutenção em cabos de fibra ótica. Possuímos capacidade de atuação em todo o território nacional e em diferentes tipos de solo. </p>
     
    </div>
    <div className="gpt3__features-heading">
    <h1 className="gradient__text">Nossa meta é a sua conectividade!</h1>
      <p>Temos a melhor solução para o seu projeto.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
