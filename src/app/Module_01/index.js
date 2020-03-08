
import React, { useReducer } from 'react';

import Button from './components/Button';

import ModuleContext from './context';
import reducers, { initData } from './reducers';




const Module_01 = () => {
  const [moduleData, dispatch] = useReducer(reducers, initData);
  const __dispatch = (actionFn) => {
    actionFn(dispatch);
  }
  return (
    <ModuleContext.Provider value={{moduleData, dispatch: __dispatch }}>
      <h3>{moduleData.data}</h3>
      <p><Button>Click Me !</Button></p>
    </ModuleContext.Provider>
  )
}

export default Module_01;