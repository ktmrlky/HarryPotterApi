import React from 'react';

const GetStudentsButton = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      Students
    </button>
  );
};

export default GetStudentsButton;
