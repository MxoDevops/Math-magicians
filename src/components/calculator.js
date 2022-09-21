import React, { useState } from 'react';
import '../calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [num, setNum] = useState({ total: '', next: '', operation: '' });
  const OnClickListening = (e) => {
    setNum(calculate(num, e.target.innerText));
  };

  const { total, next, operation } = num;
  return (
    <main className="container calculator-container">
      <div className="form">
        <div className="row" id="row">
          <input
            type="text"
            readOnly
            placeholder="0"
            value={(total || '') + (operation || '') + (next || '') || 0}
          />
        </div>
        <button type="button" className="digit" onClick={OnClickListening}>
          AC
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          +/-
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          %
        </button>
        <button
          type="button"
          className="functionality"
          onClick={OnClickListening}
        >
          ÷
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          7
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          8
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          9
        </button>
        <button
          type="button"
          className="functionality"
          onClick={OnClickListening}
        >
          x
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          4
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          5
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          6
        </button>
        <button
          type="button"
          className="functionality"
          onClick={OnClickListening}
        >
          -
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          1
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          2
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          3
        </button>
        <button
          type="button"
          className="functionality"
          onClick={OnClickListening}
        >
          +
        </button>
        <button
          type="button"
          className="digit end-row"
          onClick={OnClickListening}
        >
          0
        </button>
        <button type="button" className="digit" onClick={OnClickListening}>
          .
        </button>
        <button
          type="button"
          className="functionality"
          onClick={OnClickListening}
        >
          =
        </button>
      </div>
    </main>
  );
};

Calculator.defaultProps = { total: 0, operations: '', next: 0 };
export default Calculator;
