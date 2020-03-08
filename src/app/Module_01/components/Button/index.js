
import React, { useContext } from 'react';

import ModuleContext from '../../context';

import { fetchData } from '../../actions';

const Button = ({ children }) => {
  const { dispatch } = useContext(ModuleContext)
  return <button onClick={
    () => {
      dispatch(fetchData())
    }}
    >{children}</button>
}

export default Button;