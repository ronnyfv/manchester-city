import React, { PureComponent } from 'react';
import { easePolyOut } from 'd3-ease';
import { Animate } from 'react-move';

import featured_play from './../../../resources/images/featured_player.png';

class Text extends PureComponent {
  render() {
    return (
      <div className="featured_text">
        <Animate
          show
          start={{ opacity: 0 }}
          enter={{
            opacity: [1],

            timing: { duration: 500, delay: 800, ease: easePolyOut },
          }}
        >
          {({ opacity, x, y }) => (
            <div
              className="featured_player"
              style={{
                opacity,
                background: `url(${featured_play})`,
                transform: `translate(550px, 201px)`,
              }}
            />
          )}
        </Animate>

        <Animate
          show
          start={{ opacity: 0, rotate: 0 }}
          enter={{
            opacity: [1],
            rotate: [360],
            timing: { duration: 1000, ease: easePolyOut },
          }}
        >
          {({ opacity, rotate }) => (
            <div
              className="featured_number"
              style={{
                opacity,
                transform: `translate(260px, 170px) rotateY(${rotate}deg)`,
              }}
            >
              3
            </div>
          )}
        </Animate>

        <Animate
          show
          start={{ opacity: 0, x: 503, y: 450 }}
          enter={{
            opacity: [1],
            x: [273],
            y: [450],
            timing: { duration: 500, ease: easePolyOut },
          }}
        >
          {({ opacity, x, y }) => (
            <div
              className="featured_first"
              style={{
                opacity,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              League
            </div>
          )}
        </Animate>

        <Animate
          show
          start={{ opacity: 0, x: 503, y: 586 }}
          enter={{
            opacity: [1],
            x: [273],
            y: [586],
            timing: { duration: 500, delay: 400, ease: easePolyOut },
          }}
        >
          {({ opacity, x, y }) => (
            <div
              className="featured_second"
              style={{
                opacity,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              Championships
            </div>
          )}
        </Animate>
      </div>
    );
  }
}

export default Text;
