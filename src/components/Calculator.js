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
            <li className="clear"><Button name="AC" computeFunction={computeFunction} /></li>
            <li className="seven"><Button name="7" computeFunction={computeFunction} /></li>
            <li className="five"><Button name="5" computeFunction={computeFunction} /></li>
            <li className="one"><Button name="1" computeFunction={computeFunction} /></li>
            <li className="zero"><Button name="0" computeFunction={computeFunction} /></li>
          </ul>
          <ul className="col2">
            <li className="plus-minus"><Button name="+/-" computeFunction={computeFunction} /></li>
            <li className="eight"><Button name="8" computeFunction={computeFunction} /></li>
            <li className="four"><Button name="4" computeFunction={computeFunction} /></li>
            <li className="two"><Button name="2" computeFunction={computeFunction} /></li>
          </ul>
          <ul className="col3">
            <li className="percentage"><Button name="%" computeFunction={computeFunction} /></li>
            <li className="nine"><Button name="9" computeFunction={computeFunction} /></li>
            <li className="six"><Button name="6" computeFunction={computeFunction} /></li>
            <li className="three"><Button name="3" computeFunction={computeFunction} /></li>
            <li className="dot"><Button name="." computeFunction={computeFunction} /></li>
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
