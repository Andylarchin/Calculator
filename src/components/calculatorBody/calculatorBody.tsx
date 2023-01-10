import React, { useReducer } from 'react';
import './style.css';

  const ACTIONS = {
    ADD_DIGIT: 'add_digit',
    DELETE_DIGIT: 'delete_digit',
    CLEAR: 'clear',
    EQUAL: 'equal',
    CHOOSE_OPERATION: 'choose_operation',
  };


  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        return {
          ...state,
          currentopperand: `${state.currentopperand || ""}${payload.digit}`,
        };
    }
  };

const CalculatorBody = () => {

      const [{ currentopperand, previousopperand, operation }, dispatch] = useReducer(reducer, {});


  return (
    <div className="container">
      <div className="heading">
        <div className="currentopperand">
          {previousopperand} {operation}
        </div>
        <div className="previousopperand">{currentopperand}</div>
      </div>
      <button className="space-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 2 } });
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 3 } });
        }}
      >
        3
      </button>
      <button>*</button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 4 } });
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 5 } });
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 6 } });
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: '+' } });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 7 } });
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 8 } });
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 9 } });
        }}
      >
        9
      </button>
      <button>-</button>
      <button>.</button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 0 } });
        }}
      >
        0
      </button>
      <button className="space-two">=</button>
    </div>
  );
};

export default CalculatorBody;
