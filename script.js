var isDate = function (input) {
  const date = new Date(input);
  return !isNaN(date);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
  