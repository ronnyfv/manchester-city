import React from 'react';
import { Link } from 'react-router-dom';

const Tag = ({
  children,
  link,
  linkTo,
  bck,
  size,
  color,
  marginBottom,
  border,
}) => {
  const template = (
    <div
      style={{
        background: bck,
        fontSize: size,
        color: color,
        padding: '5px 10px',
        display: 'inline-block',
        fontFamily: 'Righteous',
        marginBottom: marginBottom,
        border: border,
      }}
    >
      {children}
    </div>
  );

  if (link) {
    return <Link to={linkTo}>{template}</Link>;
  }

  return template;
};

Tag.defaultProps = {
  marginBottom: 'inherit',
  border: 'inherit',
};

export default Tag;
