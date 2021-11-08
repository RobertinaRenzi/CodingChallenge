const parseFile = require("./util/parser");
const parseFlags = require("./util/flags");
const generate = require("./solution/your-solution");

// Usage: npm run start [corpus.txt] [n]

// Get the file to load and the number of words to generate from the flags.
const { corpusFile, n } = parseFlags();
// Parse trigrams from the file.
const trigrams = parseFile(corpusFile);

// TODO: Implement this.
const results = generate(n, trigrams);

console.log(results);
