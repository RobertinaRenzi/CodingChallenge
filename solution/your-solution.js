/**
 * Generates a text.
 *
 * @param {number} numWords The length of the text to be generated.
 * @param {Object[]} trigrams The trigrams from which to generate the text.
 * @param {String} trigrams[].word1
 * @param {String} trigrams[].word2
 * @param {String} trigrams[].word3
 * @returns {string} results The generated text.
 */

  const weightedRandom = require("../util/rand");
  const findTrigrams = require("../util/findTrigrams");
  const normalize = require("../util/normalize");
  function generate(numWords, trigrams) {

  // TODO: generate a new text based on the trigrams.
  // 1. You will need to store trigrams in a way that you can later use to generate the text.
  let freq;
  const trigramsWithOccurrencies = trigrams.map(elem => {
    elem.word1 = normalize(elem.word1);
    elem.word2 = normalize(elem.word2);
    elem.word3 = normalize(elem.word3);
    freq = 1;
    if (elem.word3 === elem.word2) {
      freq++;
      if (elem.word3 === elem.word1) {
        freq++;
      }
    } else {
      if (elem.word3 === elem.word1) {
        freq++;
      }
    }
    return {...elem, freq};
  });
 
  // 2. Select the first trigram randomly.
  let trigram = trigramsWithOccurrencies[Math.floor(Math.random()*trigrams.length)];
  console.log("####### RANDOM TRIGRAM #########");
  console.log(trigram);
  console.log("###########################################");
  let phrase = [];
  phrase.push(trigram.word1);
  phrase.push(trigram.word2);
  let filteredTrigrams = findTrigrams(trigramsWithOccurrencies, trigram.word1, trigram.word2);
  console.log("###### ALL TRIGRAMS WITH THE SAME PREFIX AS THE FIRST TWO WORDS OF THE CHOSEN TRIGRAM #### ");
  console.log(filteredTrigrams);
  console.log("###########################################");
 
  
  let data = {};
  filteredTrigrams.forEach(element => {
    data[element.word3] = element.freq;
  });
  let chosenWord = weightedRandom(data);
  console.log("###### WEIGHTED RANDOM WORD ######");
  console.log(chosenWord);
  console.log("###########################################");
  phrase.push(chosenWord);

  for(let i =0; i< numWords-3; i++) {
    filteredTrigrams = findTrigrams(trigramsWithOccurrencies, (phrase[phrase.indexOf(chosenWord)-1]), chosenWord);
    console.log("###### ALL TRIGRAMS WITH THE SAME PREFIX AS THE LAST TWO WORDS OF THE UPDATED TEXT ####");
    console.log(filteredTrigrams);
    console.log("###########################################");
    data = {};
    filteredTrigrams.forEach(element => {
      data[element.word3] = element.freq;
    });
    chosenWord = weightedRandom(data);
    console.log("###### WEIGHTED RANDOM WORD ##### ");
    console.log(chosenWord);
    console.log("###########################################");
    phrase.push(chosenWord);
  }
  console.log("###### TEXT ##### ");
  console.log(phrase.join(" "));


  //    This will give you the first two words of your generated text.

  // 3. To generate the missing numWords-2 words:
  //    a) Select each next word based on the previous last two words you created.
  //    b) If you want you can use the trigram.WeightedRandom() function that is already provided.
  //    c) When you have the new word, remember to update the last 2 words now.
  //    d) repeat until you generated all words, the result is the concatenation
  //       of all words (with a space in between words).
}

module.exports = generate;
