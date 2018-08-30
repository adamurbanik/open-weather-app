import React from 'react';

export default (props) => {

  const {
    error
  } = props; console.log('error props', error);

  return (
    <span>
      <h4 className="">
        Sorry, we are experiencing technical difficulties. Please try again later.
      </h4>
      <p>{error}</p>
    </span>

  );
}
