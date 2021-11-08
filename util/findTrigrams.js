/**
 * filters all trigrams passed in input which have the first two words equals to the words given by parameter
 * 
 *
 */

 module.exports = function findTrigrams(trigrams, word1, word2) {
    return trigrams.filter(trigram => trigram.word1 === word1 && trigram.word2 === word2);
}