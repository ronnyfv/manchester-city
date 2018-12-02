import React from 'react';

import Prize from './Prize';
import Enroll from './Enroll';

const Promotion = () => (
  <div className="promotion_wrapper" style={{ background: '#ffffff' }}>
    <div className="container">
      <Prize />
      <Enroll />
    </div>
  </div>
);

export default Promotion;
