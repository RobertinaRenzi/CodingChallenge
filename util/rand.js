const ChanceLib = require("chance");

const chance = new ChanceLib();

/**
 * WeightedRandom picks a single option from the provided at random, but weighted
 * by the mapped number.
 *
 * For example, if you have the two options foo=1 and bar=2 then the chance
 * that "bar" will be returned is twice as high as the change that "foo" is
 * returned.
 * @param {Object.<string, number>} options The weights mapped by the word they refer to.
 * @returns {string} choice The chosen value.
 */
module.exports = function weightedRandom(options) {
  const words = [];
  const weights = [];

  for (const [word, weight] of Object.entries(options)) {
    words.push(word);
    weights.push(weight);
  }
  return chance.weighted(words, weights);
};

