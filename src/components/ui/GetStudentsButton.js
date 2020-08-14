import React from 'react';
import { Button } from 'react-bootstrap';

const GetStudentsButton = (props) => {
  return <Button onClick={props.onClick}>Students</Button>;
};

export default GetStudentsButton;
