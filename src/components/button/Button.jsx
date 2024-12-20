import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ classItem = 'btn btn-success', href, linkText }) => {
  return (
    <>
      <Link className={classItem} to={href} role="button">
        {linkText}
      </Link>
    </>
  );
};

export default Button