import React from 'react';
import '../calculator.css';

class Calculator extends React.Component {
  constructor() {
    super();
    this.MapCalculator = this.MapCalculator.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  MapCalculator() {
    return (
      <div className="form">
        <div className="row" id="row" contentEditable>
          0
        </div>
        <div className="digit">AC</div>
        <div className="digit">+/-</div>
        <div className="digit">%</div>
        <div className="functionality">/</div>
        <div className="digit">7</div>
        <div className="digit">8</div>
        <div className="digit">9</div>
        <div className="functionality">x</div>
        <div className="digit">4</div>
        <div className="digit">5</div>
        <div className="digit">6</div>
        <div className="functionality">-</div>
        <div className="digit">1</div>
        <div className="digit">2</div>
        <div className="digit">3</div>
        <div className="functionality">+</div>
        <div className="digit end-row">0</div>
        <div className="digit">.</div>
        <div className="functionality">=</div>
      </div>
    );
  }

  render() {
    return <this.MapCalculator />;
  }
}

export default Calculator;
