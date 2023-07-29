module.exports = function reverse (n) {

  let result = 0;
  n = Math.abs(n);

    while (n) {
        
        let resultDivision = n % 10;

        n = Math.floor(n / 10);
        result = result * 10 + resultDivision;
    }

    return result;

}
