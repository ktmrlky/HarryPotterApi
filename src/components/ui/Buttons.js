import React from 'react';
import ClearItemsButton from './ClearItemsButton';
import GetStudentsButton from './GetStudentsButton';
import GetStaffButton from './GetStaffButton';

const Buttons = (props) => {
  return (
    <section className="buttons">
      <ClearItemsButton onClick={props.clearClick} />
      <GetStudentsButton onClick={props.getStudentsClick} />
      <GetStaffButton onClick={props.getStaffsClick} />
    </section>
  );
};

export default Buttons;
