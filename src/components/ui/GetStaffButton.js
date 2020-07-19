import React from 'react';

const GetStaffButton = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      Staff
    </button>
  );
};

export default GetStaffButton;
