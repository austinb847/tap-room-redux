import React from 'react';

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div className='add-button'>
      <button
        className="btn btn-lg btn-danger center modal-button"
        ref={buttonRef}
        onClick={showModal}
      >{triggerText}</button>
    </div>
  );
};
export default Trigger