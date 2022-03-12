import React from 'react';

const Stat = (props) => {
  return (
    <div>
      <h2>{props.count}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Stat;
