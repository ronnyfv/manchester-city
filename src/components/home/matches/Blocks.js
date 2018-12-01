import React, { PureComponent } from 'react';
import { Slide } from 'react-reveal';

import { firebaseMatches } from './../../../firebase';
import { snapshotToArray, reverseArray } from './../../shared/firebase-helpers';

import MatchBlock from './../../shared/MatchBlock';

class Blocks extends PureComponent {
  state = {
    matches: [],
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once('value')
      .then(snapshot => {
        const matches = reverseArray(snapshotToArray(snapshot));

        this.setState({
          matches,
        });
      });
  }

  render() {
    const { matches } = this.state;

    return (
      <div className="home_matches">
        {matches.map(match => (
          <Slide key={match.id} bottom>
            <div className="item">
              <div className="wrapper">
                <MatchBlock match={match} />
              </div>
            </div>
          </Slide>
        ))}
      </div>
    );
  }
}

export default Blocks;
