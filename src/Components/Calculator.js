import '../App.css'
import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(prevDisplay => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
      
      <div className='firstStringNumbers'>
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="C" onClick={handleClear} />
        </div>
                
        <div className='secondStringNumbers'>
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="*" onClick={() => handleButtonClick('*')} />
          <Button label="/" onClick={() => handleButtonClick('/')} />
        </div>
        <div className='thirdStringNumber'>
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="-" onClick={() => handleButtonClick('-')} />
        </div>
        
        <div>
          <Button label="0" onClick={() => handleButtonClick('0')} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button label="=" onClick={handleCalculate} />
          <Button label="+" onClick={() => handleButtonClick('+')} />
        </div>
        
        
        
        
        
        
        
      </div>
    </div>
  );
};

export default Calculator;