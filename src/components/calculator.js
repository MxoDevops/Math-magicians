import React from 'react';
import '../calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.MapCalculator = this.MapCalculator.bind(this);
    this.OnClickListening = this.OnClickListening.bind(this);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  OnClickListening(e) {
    const number = e.target.innerText;
    const results = calculate(this.state, number);
    this.setState(() => ({
      next: results.next,
      total: results.total,
      operation: results.operation,
    }));
  }

  MapCalculator() {
    const { total, next, operation } = this.state;
    return (
      <div className="form">
        <div className="row" id="row">
          <input
            type="text"
            readOnly
            placeholder="0"
            value={(total || '') + (operation || '') + (next || '') || 0}
          />
        </div>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          AC
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          +/-
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          %
        </button>
        <button
          type="button"
          className="functionality"
          onClick={this.OnClickListening}
        >
          ÷
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          7
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          8
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          9
        </button>
        <button
          type="button"
          className="functionality"
          onClick={this.OnClickListening}
        >
          x
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          4
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          5
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          6
        </button>
        <button
          type="button"
          className="functionality"
          onClick={this.OnClickListening}
        >
          -
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          1
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          2
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          3
        </button>
        <button
          type="button"
          className="functionality"
          onClick={this.OnClickListening}
        >
          +
        </button>
        <button
          type="button"
          className="digit end-row"
          onClick={this.OnClickListening}
        >
          0
        </button>
        <button type="button" className="digit" onClick={this.OnClickListening}>
          .
        </button>
        <button
          type="button"
          className="functionality"
          onClick={this.OnClickListening}
        >
          =
        </button>
      </div>
    );
  }

  render() {
    return <this.MapCalculator />;
  }
}
Calculator.defaultProps = { total: 0, operations: '', next: 0 };
export default Calculator;
