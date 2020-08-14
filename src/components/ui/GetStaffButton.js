import React from 'react';
import { Button } from 'react-bootstrap';

const GetStaffButton = (props) => {
  return <Button onClick={props.onClick}>Staff</Button>;
};

export default GetStaffButton;
