import React from 'react';
import './style.css'

const calculatorBody = () => {
  return (
    <div className="container">
      <div className="heading">
        <div className="currentopperand">123423</div>
        <div className="previousopperand">123456</div>
      </div>
      <button className="space-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="space-two">=</button>
    </div>
  );
};

export default calculatorBody;
