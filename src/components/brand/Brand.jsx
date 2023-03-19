import React from 'react';
import { oi, tim, concer, eletronet, ccr } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={oi} />
    </div>
    <div>
      <img src={tim} />
    </div>
    <div>
      <img src={concer} />
    </div>
    <div>
      <img src={eletronet} />
    </div>
    <div>
      <img src={ccr} />
    </div>
  </div>
);

export default Brand;
