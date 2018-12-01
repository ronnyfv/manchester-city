import React from 'react';
import { Link } from 'react-router-dom';

import m_city_logo from './../../resources/images/logos/manchester_city_logo.png';

export const CityLogo = ({ link, linkTo, width, height }) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: width,
        height: height,
        background: `url(${m_city_logo}) no-repeat`,
      }}
    />
  );

  if (link) {
    return (
      <Link to={linkTo} className="link_logo">
        {template}
      </Link>
    );
  }

  return template;
};
