const removeFromArray = function (inputArray, ...args) {
  /**
   * Returns copy of inputArray without the target elements.
   */
  // Create a new empty array
  let outputArray = [];

  // use for Each to go through the array
  inputArray.forEach((currentElement) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that
    // should be removed
    if (!args.includes(currentElement)) {
      outputArray.push(currentElement);
    }
  });
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
