import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <div className="big-bar">0</div>
      <div className="calc">
        <div className="nums">
          <ul className="col1">
            <li className="clear">C</li>
            <li className="seven">7</li>
            <li className="five">5</li>
            <li className="one">1</li>
            <li className="zero">0</li>
          </ul>
          <ul className="col2">
            <li className="plus-minus">+/-</li>
            <li className="eight">8</li>
            <li className="four">4</li>
            <li className="two">2</li>
          </ul>
          <ul className="col3">
            <li className="percentage">%</li>
            <li className="nine">9</li>
            <li className="six">6</li>
            <li className="three">3</li>
            <li className="dot">.</li>
          </ul>
        </div>
        <div className="ops">
          <ul>
            <li className="division">/</li>
            <li className="times">*</li>
            <li className="minus">-</li>
            <li className="plus">+</li>
            <li className="equal">=</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
