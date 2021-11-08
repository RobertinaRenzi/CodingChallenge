const fs = require("fs");

/**
 * ParseFile parses all trigrams from a given file.
 * @param {String} path The file to load.
 * @return {Object[]} trigrams A trigram of words.
 * @return {String} trigrams[].word1
 * @return {String} trigrams[].word2
 * @return {String} trigrams[].word3
 */
function parseFile(path) {
  var trigrams = [];

  const data = fs.readFileSync(path, "utf8");

  const words = data.split(" ");
  const filteredWords = words.filter((word) => word);

  for (let i = 0; i < filteredWords.length - 2; i++) {
    trigrams.push({
      word1: filteredWords[i],
      word2: filteredWords[i + 1],
      word3: filteredWords[i + 2],
    });
  }

  return trigrams;
}

module.exports = parseFile;
