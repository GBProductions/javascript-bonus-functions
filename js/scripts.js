const input = prompt("Please enter a sentence:");
// console.log(input);

// first function

function capitalize() {
  const firstChar = input.charAt(0).toUpperCase();
  const lastChar = input.charAt(input.length - 1).toUpperCase();
  // const result = firstChar + lastChar;
  const newString = firstChar + input.slice(1,-1) + lastChar;
  return newString;
}

console.log(capitalize());

