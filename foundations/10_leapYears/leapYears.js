const leapYears = function(givenYear) {
  const isYearDivisibleByFour = givenYear % 4 === 0;
  const isCentury = givenYear % 100 === 0;
  const isYearDivisibleByFourHundred = givenYear % 400 === 0;

  if(isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)) return true;
  else return false;
};
// Do not edit below this line
module.exports = leapYears;
