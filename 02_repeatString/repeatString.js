const repeatString = function (inputString, count) {
  // Return ERROR if the count is negative
  if (count < 0) {
    return "ERROR";
  }
  // Build the string
  let outputString = "";
  // Concatenate the strings count number of times
  for (let i = 0; i < count; i++) {
    outputString += inputString;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
