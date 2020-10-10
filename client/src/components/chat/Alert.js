import React from 'react';

const Alert = (props) => {
  return (
      <div className='alert-message'>
      {props.children}
      </div>
  )
}

export default Alert;