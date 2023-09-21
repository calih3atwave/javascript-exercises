const sumAll = function (start, end) {
  // Return ERROR if either value is not a number
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }

  // Return ERROR if either value is negative
  if (start < 0 || end < 0) {
    return "ERROR";
  }

  // Swap end with start if end is larger than start
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let outputSum = 0;
  for (let i = start; i <= end; i++) {
    outputSum += i;
  }
  return outputSum;
};

// Do not edit below this line
module.exports = sumAll;
