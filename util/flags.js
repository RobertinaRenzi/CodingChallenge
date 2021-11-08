/**
 * Parses the provided command line flags
 *
 * @returns {Object} flags The parsed flags.
 * @returns {number} flags.n The length of the text to be generated.
 * @returns {string} flags.corpusFile The file to load the corpus from.
 */
function parseFlags() {
  let corpusFile = "corpus/trump.txt";

  if (process.argv.length > 2) {
    corpusFile = process.argv[2];
  }

  let n = 100;
  if (process.argv.length > 3) {
    console.log(process.argv[3],'stampa');
    n = parseInt(process.argv[3]);
    if (isNaN(n)) {
      throw "second argument is not an integer: " + process.argv[1];
    }
  }

  return {
    corpusFile,
    n,
  };
}

module.exports = parseFlags;
