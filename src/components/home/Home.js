import React from 'react';

import Featured from './featured/Featured';
import Matches from './matches/Matches';
import Meet from './meet/Meet';
import Promotion from './promotion/Promotion';

const Home = () => (
  <div className="bck_blue">
    <Featured />
    <Matches />
    <Meet />
    <Promotion />
  </div>
);

export default Home;
