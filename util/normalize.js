// Normalize makes the string lower case and removes any special characters and
// numbers.
function normalize(input) {
  return input.toLowerCase().replace(/[^a-z]/g, "");
}

module.exports = normalize;
