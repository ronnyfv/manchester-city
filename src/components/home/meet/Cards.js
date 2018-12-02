import React, { PureComponent } from 'react';
import { easePolyOut } from 'd3-ease';
import { Animate } from 'react-move';

import PlayerCard from './../../shared/PlayerCard';
import otamendi from './../../../resources/images/players/Otamendi.png';

class Cards extends PureComponent {
  state = {
    cards: [
      {
        bottom: 90,
        left: 300,
      },
      {
        bottom: 60,
        left: 200,
      },
      {
        bottom: 30,
        left: 100,
      },
      {
        bottom: 0,
        left: 0,
      },
    ],
  };

  render() {
    const { show } = this.props;
    const { cards } = this.state;

    return (
      <div className="">
        {cards.map((card, index) => (
          <Animate
            key={index}
            show={show}
            start={{ left: 0, bottom: 0 }}
            enter={{
              left: [card.left],
              bottom: [card.bottom],
              timing: { duration: 500, ease: easePolyOut },
            }}
          >
            {({ left, bottom }) => (
              <div style={{ position: 'absolute', left, bottom }}>
                <PlayerCard
                  number="30"
                  name="Nicolas"
                  lastname="Otamendi"
                  bck={otamendi}
                />
              </div>
            )}
          </Animate>
        ))}
      </div>
    );
  }
}

export default Cards;
