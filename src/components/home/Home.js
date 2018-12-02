import React from 'react';

import Featured from './featured/Featured';
import Matches from './matches/Matches';
import Meet from './meet/Meet';

const Home = () => (
  <div className="bck_blue">
    <Featured />
    <Matches />
    <Meet />
  </div>
);

export default Home;
