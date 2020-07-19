import React from 'react';

const ClearItemsButton = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      All
    </button>
  );
};

export default ClearItemsButton;
