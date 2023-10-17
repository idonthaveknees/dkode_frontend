export const convertPLNtoGBP = (result, exchangeRate, setExchangeRate, setResult) => {
  if (exchangeRate) {
    const plnValue = parseFloat(result);
    const gbpValue = plnValue / exchangeRate;
    setResult(gbpValue.toFixed(4));
  } else { /* fetch only if the value has not been previously fetched */
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/2023-10-12/')
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates[0].mid);
        const plnValue = parseFloat(result);
        const gbpValue = plnValue / data.rates[0].mid;
        setResult(gbpValue.toFixed(4));
      })
      .catch((error) => console.error('Error fetching exchange rate: ', error));
  }
};

export const convertPLNtoEUR = (result, exchangeRate, setExchangeRate, setResult) => {
  if (exchangeRate) {
    const plnValue = parseFloat(result);
    const eurValue = plnValue / exchangeRate;
    setResult(eurValue.toFixed(4));
  } else { /* fetch only if the value has not been previously fetched */
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/eur/2023-10-12/')
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates[0].mid);
        const plnValue = parseFloat(result);
        const eurValue = plnValue / data.rates[0].mid;
        setResult(eurValue.toFixed(4));
      })
      .catch((error) => console.error('Error fetching exchange rate: ', error));
  }
};
  
export const convertPLNtoUSD = (result, exchangeRate, setExchangeRate, setResult) => {
  if (exchangeRate) {
    const plnValue = parseFloat(result);
    const usdValue = plnValue / exchangeRate;
    setResult(usdValue.toFixed(4));
  } else { /* fetch only if the value has not been previously fetched */
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/2023-10-12/')
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates[0].mid);
        const plnValue = parseFloat(result);
        const usdValue = plnValue / data.rates[0].mid;
        setResult(usdValue.toFixed(4));
      })
      .catch((error) => console.error('Error fetching exchange rate: ', error));
  }
};