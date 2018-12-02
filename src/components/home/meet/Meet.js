import React, { PureComponent } from 'react';
import { Reveal } from 'react-reveal';

import Cards from './Cards';
import Tag from './../../shared/Tag';
import stripes from './../../../resources/images/stripes.png';

class Meet extends PureComponent {
  state = {
    show: false,
  };

  reveal = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    const { show } = this.state;

    return (
      <Reveal fraction={0.6} onReveal={this.reveal}>
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <Cards show={show} />
              </div>

              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    marginBottom="20px"
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    marginBottom="20px"
                  >
                    the
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    marginBottom="20px"
                  >
                    players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link
                    linkTo="/the_team"
                    marginBottom="27px"
                    border="1px solid #0e1731"
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default Meet;
