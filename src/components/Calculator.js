import './Calculator.css';
import React, { useState } from 'react';
import { convertPLNtoGBP, convertPLNtoEUR, convertPLNtoUSD } from '../utils/conversionFuncs';

const Calculator = () => {
    const [result, setResult] = useState('');
    const [gbpExchangeRate, setGbpExchangeRate] = useState(null);
    const [eurExchangeRate, setEurExchangeRate] = useState(null);
    const [usdExchangeRate, setUsdExchangeRate] = useState(null);
  
    const handleClick = (value) => {
      if (value === '=') {
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult('Error');
        }
      } else if (value === 'C') {
        setResult('');
      } else if (value === 'GBP') {
        convertPLNtoGBP(result, gbpExchangeRate, setGbpExchangeRate, setResult);
      } else if (value === 'EUR') {
        convertPLNtoEUR(result, eurExchangeRate, setEurExchangeRate, setResult);
      } else if (value === 'USD') {
        convertPLNtoUSD(result, usdExchangeRate, setUsdExchangeRate, setResult);
      } else {
        setResult(result + value);
      }
    };

    return (
        <div id="calculator">
        <div class="cell" id="result-holder">
            <input type="text" id="result" value={result} readOnly/>
        </div>
        <div class="cell">
            <input type="button" value="GBP" onClick={() => handleClick('GBP')}/>
        </div>
        <div class="cell">
            <input type="button" value="EUR" onClick={() => handleClick('EUR')}/>
        </div>
        <div class="cell">
            <input type="button" value="USD" onClick={() => handleClick('USD')}/>
        </div>
        <div class="cell">
            <input type="button" value="C" onClick={() => handleClick('C')}/>
        </div>
        <div class="cell">
            <input type="button" value="7" onClick={() => handleClick('7')}/>
        </div>
        <div class="cell">
            <input type="button" value="8" onClick={() => handleClick('8')}/>
        </div>
        <div class="cell">
            <input type="button" value="9" onClick={() => handleClick('9')}/>
        </div>
        <div class="cell">
            <input type="button" value="/" onClick={() => handleClick('/')}/>
        </div>
        <div class="cell">
            <input type="button" value="4" onClick={() => handleClick('4')}/>
        </div>
        <div class="cell">
            <input type="button" value="5" onClick={() => handleClick('5')}/>
        </div>
        <div class="cell">
            <input type="button" value="6" onClick={() => handleClick('6')}/>
        </div>
        <div class="cell">
            <input type="button" value="*" onClick={() => handleClick('*')}/>
        </div>
        <div class="cell">
            <input type="button" value="1" onClick={() => handleClick('1')}/>
        </div>
        <div class="cell">
            <input type="button" value="2" onClick={() => handleClick('2')}/>
        </div>
        <div class="cell">
            <input type="button" value="3" onClick={() => handleClick('3')}/>
        </div>
        <div class="cell">
            <input type="button" value="-" onClick={() => handleClick('-')}/>
        </div>
        <div class="cell">
            <input type="button" value="." onClick={() => handleClick('.')}/>
        </div>
        <div class="cell">
            <input type="button" value="0" onClick={() => handleClick('0')}/>
        </div>
        <div class="cell">
            <input type="button" value="=" onClick={() => handleClick('=')}/>
        </div>
        <div class="cell">
            <input type="button" value="+" onClick={() => handleClick('+')}/>
        </div>
      </div>
    );
};

export default Calculator;