import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const state = {
    total: 0,
    next: null,
    operation: null,
  };

  const [now, toggle] = useState(state);

  const computeFunction = (e) => {
    toggle((now) => calculate(now, e.target.name));
  };

  const { total, next, operation } = now;

  return (
    <div className="calculator">
      <div className="big-bar">
        {total}
        {operation}
        {next}
      </div>
      <div className="calc">
        <div className="nums">
          <ul className="col1">
            <li className="list"><Button name="AC" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="7" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="5" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="1" computeFunction={computeFunction} /></li>
            <li className="list zero"><Button name="0" computeFunction={computeFunction} /></li>
          </ul>
          <ul className="col2">
            <li className="list"><Button name="+/-" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="8" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="4" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="2" computeFunction={computeFunction} /></li>
          </ul>
          <ul className="col3">
            <li className="list"><Button name="%" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="9" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="6" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="3" computeFunction={computeFunction} /></li>
            <li className="list"><Button name="." computeFunction={computeFunction} /></li>
          </ul>
        </div>
        <div className="ops">
          <ul>
            <li className="division"><Button name="/" computeFunction={computeFunction} /></li>
            <li className="times"><Button name="x" computeFunction={computeFunction} /></li>
            <li className="minus"><Button name="-" computeFunction={computeFunction} /></li>
            <li className="plus"><Button name="+" computeFunction={computeFunction} /></li>
            <li className="equal"><Button name="=" computeFunction={computeFunction} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
