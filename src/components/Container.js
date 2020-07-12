import React from 'react'
import { Modal } from './Modal';
import TriggerButton from './TriggerButton';

function Container(props) {
  return (
    <div>
      <TriggerButton triggerText = {props.triggerText}/>

    </div>
  )
}

export default Container
