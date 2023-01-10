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
        if (state.overwrite) {
          return {
            ...state,
            currentOperand: payload.digit,
            overwrite: false,
          };
        }
        if (payload.digit === '0' && state.currentOperand === '0') {
          return state;
        }
        if (payload.digit === '.' && state.currentOperand.includes('.')) {
          return state;
        }

        return {
          ...state,
          currentOperand: `${state.currentOperand || ''}${payload.digit}`,
        };
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOperand == null && state.previousOperand == null) {
          return state;
        }

        if (state.currentOperand == null) {
          return {
            ...state,
            operation: payload.operation,
          };
        }

        if (state.previousOperand == null) {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
          };
        }

        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: null,
        };
      case ACTIONS.CLEAR:
        return {};
      case ACTIONS.DELETE_DIGIT:
        if (state.overwrite) {
          return {
            ...state,
            overwrite: false,
            currentOperand: null,
          };
        }
        if (state.currentOperand == null) return state;
        if (state.currentOperand.length === 1) {
          return { ...state, currentOperand: null };
        }

        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };
      case ACTIONS.EVALUATE:
        if (
          state.operation == null ||
          state.currentOperand == null ||
          state.previousOperand == null
        ) {
          return state;
        }

        return {
          ...state,
          overwrite: true,
          previousOperand: null,
          operation: null,
          currentOperand: evaluate(state),
        };
    }
  }

  const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
  });
  function formatOperand(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split('.');
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
  }

  function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return '';
    let computation = '';
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
    }

    return computation.toString();
  }

const CalculatorBody = () => {

      const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});


  return (
    <div className="container">
      <div className="heading">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="space-two" onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: '' })}>
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { digit: '/' } });
        }}
      >
        /
      </button>
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
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '*' } });
        }}
      >
        *
      </button>
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
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '+' } });
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
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '-' } });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: '.' } });
        }}
      >
        .
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 0 } });
        }}
      >
        0
      </button>
      <button className="space-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
        =
      </button>
    </div>
  );
};

export default CalculatorBody;
