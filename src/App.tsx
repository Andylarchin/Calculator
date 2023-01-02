import React, {FC} from 'react';
import './App.css';
import Calculator from './components/calculatorBody/calculatorBody'

let App : FC = () => {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App;
