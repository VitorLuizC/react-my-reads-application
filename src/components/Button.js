import './Button.css';
import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

function Button ({ onClick, icon, link, children, ...props }) {
  const isLink = Boolean(typeof link === 'string' && link.trim());
  const classes = classnames(
    'Button',
    icon && '-icon',
    icon && '-icon-' + icon,
    isLink && '-link'
  );

  if (isLink) {
    return (
      <Link {...props} className={classes} to={link} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
