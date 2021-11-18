// Implement the content of the formatCurrency method.
// The args: 1. one: String, 2. two: String Return value: String
// const formatCurrency = function( currencySymbol, decimalSeparator ) {
//     //replace with content
// }
// The function takes in a currency symbol plus a symbol to be used as the decimal separator.
// We should be able to later reuse the same function to return the dollar value with the assigned currency symbol and decimal separator:
//  const getUS = formatCurrency( '$', '.' ); const getUK = formatCurrency( '£', '.' ); console.log(getUS(1901));
// returns $19.01 console.log(getUK(2499)); // returns £24.99

function formatCurrency(currencySymbol, decimalSeparator) {
  return function (value) {
    const wholePart = Math.trunc(value / 100);
    let reminder = value % 100;
    if (reminder < 10) {
      reminder = "" + 0 + reminder;
    }
    return `${currencySymbol}${wholePart}${decimalSeparator}${reminder}`;
  };
}

const getUS = formatCurrency("$", ".");
const getUK = formatCurrency("£", ".");
console.log(getUS(1901));
console.log(getUK(2499));
