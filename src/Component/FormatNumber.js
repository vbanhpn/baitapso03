 
 function FormatNumber(n, currency, toFix) {
    return currency + n.toFixed(toFix).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    })
  }
    export default FormatNumber;
