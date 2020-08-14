import React from 'react';
import { Button } from 'react-bootstrap';

const ClearItemsButton = (props) => {
  return <Button onClick={props.onClick}>All</Button>;
};

export default ClearItemsButton;
