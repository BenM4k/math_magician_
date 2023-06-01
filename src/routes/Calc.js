import React from 'react';
import Calculator from '../components/Calculator';

function Calc() {
  return (
    <div style={{
      marginTop: '150px',
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '150px',
    }}
    >
      <h2>Let&apos;s do some Math!</h2>
      <div style={{
        border: '1px solid black',
        padding: '50px',
        outline: '3px solid black',
        background: 'white',
      }}
      >
        <Calculator />
      </div>
    </div>
  );
}

export default Calc;
