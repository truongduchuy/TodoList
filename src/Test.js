import React from 'react';
import withLogin from './WithLogin';

const Test = () => {
  return (
    <div>
      Welcome TodoApp
    </div>
  )
}

export default withLogin(Test);