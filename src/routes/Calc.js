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
        padding: '35px',
        background: 'rgba(255, 255, 255, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.65)',
        borderRadius: '20px',
        height: 'fit-content',
        width: 'fit-content',
      }}
      >
        <h2 style={{
          background: 'rgba(255, 255, 255, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.50)',
          borderRadius: '20px',
          padding: '15px',
          width: 'fit-content',
          height: 'fit-content',
          color: '#303030',
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
