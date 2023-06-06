import React from 'react';
import Calculator from '../components/Calculator';

function Calc() {
  return (
    <div style={{
      marginTop: '150px',
      padding: '0 90px',
      width: '100%',
    }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '350px',
        padding: '25px',
        background: 'white',
        height: 'fit-content',
        width: 'fit-content',
      }}
      >
        <h2 style={{
          boxShadow: '2px 6px 4px 0 rgb(0 0 0 / 23%)',
          padding: '15px',
          width: 'fit-content',
          height: 'fit-content',
        }}
        >
          Let&apos;s do some Math!
        </h2>
        <Calculator />
      </div>
    </div>
  );
}

export default Calc;
